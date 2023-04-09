import React from 'react';

import Loader from 'react-loaders';
import './index.scss';

function Contact() {
  return (
    <>
      <Loader type="ball-scale-ripple-multiple" />
      <div className="container contact-page">
        <div className="text">
          <h1>Contact Me!</h1>
          <p>Let's brew up some ideas over a cup of coffee.</p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type={'text'}
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type={'email'}
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type={'text'}
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <input
                    type={'text'}
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>
                <li>
                  <input
                    className="submit-btn"
                    type={'submit'}
                    name="submit"
                    placeholder="Submit"
                    required
                  />
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
