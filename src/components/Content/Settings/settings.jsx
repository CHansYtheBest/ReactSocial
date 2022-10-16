import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Preloader from "../../Layout/Navigation/Preloader/preloader";

const SettingsForm = (props) => {
  let getContactsValidation = () => {
    let validationObject = {};
    Object.keys(props.profilePage.contacts).forEach((key) => {
      validationObject[key] = Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      );
    });
    return validationObject;
  };

  const initialValues = {
    aboutMe: props.profilePage.aboutMe,
    fullName: props.profilePage.fullName,
    lookingForAJob: props.profilePage.lookingForAJob,
    lookingForAJobDescription: props.profilePage.lookingForAJobDescription,
    contacts: props.profilePage.contacts,
  };
  let mapLinks = React.Children.toArray(
    Object.keys(props.profilePage.contacts).map((key) => {
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
      initialValues={initialValues}
      validationSchema={Yup.object({
        contacts: Yup.object(getContactsValidation()),
      })}
      onSubmit={(values, { setSubmitting }) => {
        props.setNewProfileDataThunk(values);
        setSubmitting(false);
      }}
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

export default function Settings(props) {
  useEffect(() => {
    if (props.profilePage.userId !== props.loggedProfileId && props.loggedProfileId !== null) {
      props.getProfileThunk(props.loggedProfileId);
    }
    console.log(props.profilePage);
  }, []);

  return (
    <>
      {props.profilePage.isFetching ? <Preloader /> : null}

      {props.profilePage.userId === props.loggedProfileId ? (
        <>
          <SettingsForm
            setNewProfileDataThunk={props.setNewProfileDataThunk}
            profilePage={props.profilePage}
            loggedProfileId={props.loggedProfileId}
          />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
