const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'andrewbantly@gmail.com',
    from: 'no-reply@groundbreakers.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Email send error', error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
