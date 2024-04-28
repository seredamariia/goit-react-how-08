import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { initialValues } from "../../redux/contacts/constants";
import { selectIsAddingContact } from "../../redux/contacts/selectors";
import { CircularProgress } from "@mui/material";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const addingContact = useSelector(selectIsAddingContact);

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    !addingContact && actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.containerForm}>
            <label className={css.label} htmlFor={nameId}>
              Name
            </label>

            <div>
              <Field
                className={`${css.input} ${errors.name && touched.name}`}
                type="text"
                name="name"
                id={nameId}
              />
            </div>
            <ErrorMessage className={css.error} name="name" component="span" />
            <label className={css.label} htmlFor={numberId}>
              Phone
            </label>

            <div>
              <Field
                className={`${css.input} ${errors.number && touched.number}`}
                type="text"
                name="number"
                id={numberId}
              />
            </div>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />

            <button className={css.button} type="submit">
              {addingContact ? <CircularProgress /> : "Add Contact"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
