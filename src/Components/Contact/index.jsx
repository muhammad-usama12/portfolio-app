import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Loader from 'react-loaders';
import './index.scss';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        () => {
          alert('Email Sent Successfully!');
          window.location.reload(false);
        },
        () => {
          alert('Email failed!');
          window.location.reload(true);
        },
      );
  };

  console.log(`${process.env.REACT_APP_SERVICE}`);
  console.log(`${process.env.REACT_APP_TEMPLATE_ID}`);
  console.log(`${process.env.REACT_APP_PUBLIC_KEY}`);

  return (
    <>
      <Loader type="ball-scale-ripple-multiple" />
      <div className="container contact-page">
        <div className="text">
          <h1>Contact Me!</h1>
          <p>Let's brew up some ideas over a cup of coffee.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button className="submit-btn" type="submit" value="Send">
                    Send
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
