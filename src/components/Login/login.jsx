import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import s from "./login.module.css";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  FormControlLabel,
  Grid,
  Link,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material/";

const LoginForm = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5e5d5d",
      },
    },
  });

  const CustomButton = styled(Button)(({ theme }) => ({
    background: "#e7e4f8",
    border: "1px solid #323232",
    borderRadius: 5,
    color: theme.palette.primary.main,
    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
    textDecoration: "none",
    marginTop: "5px",
    "&:hover": {
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#5e5d5d",
      color: "#e7e4f8",
      border: "1px solid #e7e4f8",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            minWidth: 350,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box sx={{ mt: 1, width: "100%" }}>
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
                props.loginThunk(values);
                setSubmitting(true);
              }}
            >
              {(formik) => (
                <Form>
                  {props.hasLoginFetched && formik.isSubmitting ? formik.setSubmitting(false) : null}

                  {props.loginError ? (
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      <strong>{props.loginError}</strong>
                    </Alert>
                  ) : null}
                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    placeholder="Email"
                    autoComplete="email"
                    autoFocus
                    id="email"
                    type="email"
                    name="email"
                    helperText={formik.getFieldMeta("email").error}
                    error={formik.getFieldMeta("email").error ? true : false}
                  />

                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={formik.getFieldMeta("password").error}
                    error={formik.getFieldMeta("password").error ? true : false}
                  />

                  <FormControlLabel control={<Field as={Checkbox} name="rememberMe" id="rememberMe" color="primary" />} label="Remember me" />

                  <CustomButton
                    disableElevation
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    classes={{ disabled: s.disabled }}
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </CustomButton>
                </Form>
              )}
            </Formik>

            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default function Login(props) {
  let navigate = useNavigate();
  setTimeout(() => {
    if (props.isAuth) {
      navigate("/");
    }
  }, 60);
  return (
    <>
      <section className={`content ${s.section}`}>
        <LoginForm
          loginThunk={props.loginThunk}
          hasLoginFetched={props.hasLoginFetched}
          isAuth={props.isAuth}
          loginError={props.loginError}
          setLoginError={props.setLoginError}
        />
      </section>
    </>
  );
}
