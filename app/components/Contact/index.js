import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './contact.scss';

const Contact = ({ errors, touched }) => (
  <section className="c-section c-contact u-padding-v-xlarge">
    <h1>Get in touch</h1>
    <p>We&apos;ll love to hear from you!</p>
    <Form>
      <div>
        {touched.name && errors.name ? (
          <p style={{ color: 'red' }}>{errors.name}</p>
        ) : null}
        <Field
          id="Name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
        />
      </div>
      <div>
        {touched.email && errors.email ? (
          <p style={{ color: 'red' }}>{errors.email}</p>
        ) : null}
        <Field
          id="message"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your Email"
        />
      </div>
      <div>
        {touched.message && errors.message ? (
          <p style={{ color: 'red' }}>{errors.message}</p>
        ) : null}
        <Field
          component="textarea"
          name="message"
          id="message"
          placeholder="Your Message"
        />
      </div>
      <button type="submit" className="button button--success button--block">
        Send Message
      </button>
    </Form>
  </section>
);

Contact.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  }),
  handleSubmit: () => {}, // TODO: Integrate Contact form API #13 ,
})(Contact);
