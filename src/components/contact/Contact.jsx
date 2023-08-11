import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_2xtkzmm', 'template_iv0m8ro', form.current, '8qY7BDA0t5ks1qojb');
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }

    form.current.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact;
