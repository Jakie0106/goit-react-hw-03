import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./contactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const tellValid = /^\d{3}-\d{2}-\d{2}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(tellValid, "It`s not a number!")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const handleSubmit = (values, options) => {
    options.resetForm();
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.formItem}>
            <label htmlFor={nameId}>Name</label>
            <Field className={css.input} name="name" type="text" id={nameId} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formItem}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberId}
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <button className={css.addBtn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
