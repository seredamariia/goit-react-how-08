import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operation";
import { initialValuesSignUp } from "../../redux/auth/constants";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(7, "Too Short!").required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <section className={style.bgPosition}>
      <div className={style.registerForm}>
        <h2>Sign Up</h2>
        <Formik
          initialValues={initialValuesSignUp}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={style.thumb}>
                <Field
                  className={`${style.input} ${errors.name && touched.name}`}
                  type="text"
                  name="name"
                  id={nameId}
                />
                <label className={style.label} htmlFor={nameId}>
                  Username
                </label>
              </div>
              <ErrorMessage
                className={style.error}
                name="name"
                component="span"
              />

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
              <button className={style.buttonSignUp} type="submit">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default RegisterForm;
