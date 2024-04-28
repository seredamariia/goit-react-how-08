import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { logIn } from "../../redux/auth/operation";
import { initialValuesSignIn } from "../../redux/auth/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./LoginForm.module.css";

const validation = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(7, "Too Short!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <section className={style.bgPosition}>
      <div className={style.logInForm}>
        <h2>Sign In</h2>
        <Formik
          initialValues={initialValuesSignIn}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={style.thumb}>
                <Field
                  className={`${style.input} ${errors.email && touched.email}`}
                  type="email"
                  name="email"
                  id={emailId}
                />
                <label className={style.label} htmlFor={emailId}>
                  Email
                </label>
              </div>
              <ErrorMessage
                className={style.error}
                name="email"
                component="span"
              />
              <div className={style.thumb}>
                <Field
                  className={`${style.input} ${
                    errors.password && touched.password
                  }`}
                  type={"password"}
                  name="password"
                  id={passwordId}
                />
                <label className={style.label} htmlFor={passwordId}>
                  Password
                </label>
              </div>
              <ErrorMessage
                className={style.error}
                name="password"
                component="span"
              />
              <button className={style.buttonSignIn} type="submit">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
