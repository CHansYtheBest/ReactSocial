import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import { useState } from "react";
import { memo } from "react";

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

  let mapLinks = React.Children.toArray(
    Object.keys(props.profile.contacts).map((key) => {
      return (
        <>
          <label htmlFor={`${key}`}>{key.charAt(0).toUpperCase() + key.slice(1)}: </label>
          <Field placeholder={`Enter ${key} link...`} type="text" name={`contacts.${key}`} />
          <br />
          <ErrorMessage name={`contacts.${key}`} component="p" />
        </>
      );
    })
  );

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
        contacts: Yup.object(getContactsValidation()),
      })}
      onSubmit={(values, { setSubmitting }) => {
        props.setNewProfileDataThunk(values);
        setSubmitting(false);
      }}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <h3>Name</h3>
            <Field placeholder="Enter new name..." type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
          </div>
          <div>
            <h3>About you</h3>
            <Field as="textarea" placeholder="Type something about you..." type="text" name="aboutMe" />
            <ErrorMessage name="aboutMe" component="div" />
          </div>
          <div>
            <Field id="lookingForAJob" type="checkbox" name="lookingForAJob" />
            <label htmlFor="lookingForAJob">Are you looking for a job?</label>
          </div>
          <div>
            <Field as="textarea" placeholder="Type something about your job..." type="text" name="lookingForAJobDescription" />
            <ErrorMessage name="lookingForAJobDescription" component="div" />
          </div>
          <div>
            <h3>Links</h3>
            {mapLinks}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Save changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

const AvatarChange = (props) => {
  let [file, updateFile] = useState({});

  let fileChangeHandler = (e) => {
    updateFile(e.target.files[0]);
  };

  let fileUploadHandler = () => {
    let fileForm = new FormData();
    fileForm.append("image", file, file.name);
    props.setAvatar(fileForm, props.id);
  };

  return (
    <div>
      <img src={props.avatar} alt="avatar" width="300px" height="300px" />
      <br />
      <input type="file" onChange={fileChangeHandler} />
      <br />
      <button onClick={fileUploadHandler}>Change avatar</button>
    </div>
  );
};

let Settings = memo((props) => {
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <>
          <AvatarChange avatar={props.profile.avatar.large} setAvatar={props.setAvatarThunk} id={props.loggedProfileId} />
          <SettingsForm
            setNewProfileDataThunk={props.setNewProfileDataThunk}
            getProfile={props.getMyProfileThunk}
            profile={props.profile}
            loggedProfileId={props.loggedProfileId}
          />
        </>
      )}
    </>
  );
});
export default Settings;
