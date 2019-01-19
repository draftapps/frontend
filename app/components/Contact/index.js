import React from 'react';
import './contact.scss';

const Contact = () => (
  <section className="c-section c-contact u-padding-v-xlarge">
    <h1>Get in touch</h1>
    <p>We&apos;ll love to hear from you!</p>
    <form action="">
      <input
        id="Name"
        type="text"
        autoComplete="name"
        placeholder="Your Name"
      />
      <input
        id="message"
        type="email"
        autoComplete="email"
        placeholder="Your Email"
      />
      <textarea name="message" id="message" placeholder="Your Message" />
      <button type="submit" className="button button--success button--block">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
