import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HeaderContainer from "../Layout/Navigation/Header/headerContainer";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "", rememberMe: false }}
    validationSchema={Yup.object({
      email: Yup.string()
        .required("No email provided.")
        .matches(/[a-zA-Z]/, "Login can only contain Latin letters.")
        .email("Invalid email"),
      password: Yup.string()
        .required("No password provided.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    })}
    onSubmit={(values, { setSubmitting }) => {
      props.setLoginError();
      setSubmitting(false);
      props.loginThunk(values);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <p>{props.loginError ? props.loginError : ""}</p>
        <div>
          <Field placeholder="Email" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <Field placeholder="Password" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <div>
          <Field id="rememberMe" type="checkbox" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default function Login(props) {
  let navigate = useNavigate();
  setTimeout(() => {
    if (props.isAuth) {
      navigate("/");
    }
  }, 60);
  return (
    <>
      <HeaderContainer />
      <section>
        <h1>Login Form</h1>
        <div>
          <LoginForm loginThunk={props.loginThunk} isAuth={props.isAuth} loginError={props.loginError} setLoginError={props.setLoginError} />
        </div>
      </section>
    </>
  );
}
