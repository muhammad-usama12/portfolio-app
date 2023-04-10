import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ColorRing } from 'react-loader-spinner';

function Contact() {
  const form = useRef();
  const position = [43.856098, -79.337021];
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

  return (
    <>
      {/* <Loader type="ball-scale-ripple-multiple" />
       */}
      {/* <Triangle
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperClass="loader"
        className="loader"
        visible={true}
      /> */}
      <ColorRing
        visible={true}
        wrapperClass="loader"
        colors={['#b2c9ab', '#a69eb0', '#efeff2', '#f2e2cd', '#dadae3']}
      />
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
      <div className="info">
        Muhammad Usama,
        <br />
        Markham, ON
        <br />
        Canada
        <br />
        <a className="email-link" href="mailto:muhammad.usama12@hotmail.com">
          muhammad.usama12@hotmail.com
        </a>
      </div>
      <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker color={'#fff'} position={position}>
            <Popup>Hello, there 👋</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Contact;
