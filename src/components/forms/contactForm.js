import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name:{' '}
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
