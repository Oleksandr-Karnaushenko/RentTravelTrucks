import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import styles from './FeedbackForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  date: Yup.string().required('Required'),
  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
  date: '',
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div>
          <label htmlFor={nameFieldId}></label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            placeholder="Name*"
          />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}></label>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={dateFieldId}></label>
          <Field
            type="text"
            name="date"
            id={dateFieldId}
            placeholder="Booking date*"
          />
          <ErrorMessage name="date" component="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId}></label>
          <Field
            as="textarea"
            name="message"
            id={msgFieldId}
            rows="5"
            placeholder="Comment"
          />
          <ErrorMessage name="message" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
