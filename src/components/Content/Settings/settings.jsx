import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import { useState } from "react";
import { memo } from "react";
import { Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import s from "./settings.module.css";

const SettingsForm = (props) => {
  let getContactsValidation = () => {
    let validationObject = {};
    Object.keys(props.profile.contacts).forEach((key) => {
      validationObject[key] = Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      );
    });
    return validationObject;
  };
  function getContacts(formik) {
    let mapLinks = React.Children.toArray(
      Object.keys(props.profile.contacts).map((key) => {
        return (
          <>
            <label htmlFor={`${key}`}>{key.charAt(0).toUpperCase() + key.slice(1)}: </label>
            <div>
              <Field
                as={TextField}
                placeholder={`Enter ${key} link...`}
                type="text"
                helperText={formik.getFieldMeta(`contacts.${key}`).error}
                error={formik.getFieldMeta(`contacts.${key}`).error ? true : false}
                name={`contacts.${key}`}
              />
            </div>
          </>
        );
      })
    );
    return mapLinks;
  }

  return (
    <Formik
      initialValues={{
        aboutMe: props.profile.aboutMe,
        fullName: props.profile.fullName,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        contacts: props.profile.contacts,
      }}
      validationSchema={Yup.object({
        aboutMe: Yup.string().required("Field is required"),
        lookingForAJobDescription: Yup.string().required("Field is required"),
        fullName: Yup.string().required("Field is required"),
        contacts: Yup.object(getContactsValidation()),
      })}
      onSubmit={(values, { setSubmitting }) => {
        props.setSettingsError();
        props.setNewProfileDataThunk(values);
        setSubmitting(true);
      }}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          {props.hasSettingsFetched && formik.isSubmitting ? formik.setSubmitting(false) : null}

          <Typography component="h2" variant="h6">
            Name
          </Typography>
          <Field
            as={TextField}
            placeholder="Enter new name..."
            type="text"
            name="fullName"
            helperText={formik.getFieldMeta("fullName").error}
            error={formik.getFieldMeta("fullName").error ? true : false}
          />
          <Typography component="h2" variant="h6">
            About you
          </Typography>
          <Field
            as={TextField}
            multiline
            placeholder="Type something about you..."
            type="text"
            name="aboutMe"
            helperText={formik.getFieldMeta("aboutMe").error}
            error={formik.getFieldMeta("aboutMe").error ? true : false}
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="lookingForAJob" id="lookingForAJob" color="primary" />}
            label="Are you looking for a job?"
          />
          <Field
            as={TextField}
            multiline
            placeholder="Type something about your job..."
            type="text"
            name="lookingForAJobDescription"
            helperText={formik.getFieldMeta("lookingForAJobDescription").error}
            error={formik.getFieldMeta("lookingForAJobDescription").error ? true : false}
          />
          <Typography component="h2" variant="h6">
            Links
          </Typography>

          {getContacts(formik)}
          <button type="submit" disabled={formik.isSubmitting}>
            Save changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

const AvatarChange = (props) => {
  let [file, updateFile] = useState();

  let fileChangeHandler = (e) => {
    console.log("uploaded");
    updateFile(e.target.files[0]);
  };

  let fileUploadHandler = () => {
    let fileForm = new FormData();
    fileForm.append("image", file, file.name);
    props.setAvatar(fileForm, props.id);
  };

  return (
    <>
      <div
        className={s.customFileUpload}
        style={{
          backgroundImage: `url(${file ? URL.createObjectURL(file) : props.avatar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
        }}
      ></div>
      <label className={s.innerFileUpload} onChange={fileChangeHandler}>
        <input type="file" className={s.inputFile} accept="image/png,image/jpeg,image/x-png,image/jpg" />
        <p>Select new avatar</p>
      </label>
      {file ? <button onClick={fileUploadHandler}>Upload {file.name}</button> : null}
    </>
  );
};

let Settings = memo((props) => {
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Container maxWidth="xl">
          <AvatarChange avatar={props.profile.avatar.large} setAvatar={props.setAvatarThunk} id={props.loggedProfileId} />

          <SettingsForm
            setNewProfileDataThunk={props.setNewProfileDataThunk}
            getProfile={props.getMyProfileThunk}
            profile={props.profile}
            loggedProfileId={props.loggedProfileId}
          />
        </Container>
      )}
    </>
  );
});
export default Settings;
