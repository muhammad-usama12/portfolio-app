import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import {
  Heading,
  useMediaQuery,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react';

function Contact() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 900px)',
  );
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
      <div className="container contact-page">
        <VStack
          display={'grid'}
          justifyItems={'start'}
          pos={'absolute'}
          left={'150px'}
        >
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={'30px'}
            fontFamily={'Yeseva One, cursive'}
          >
            CONTACT ME!
          </Heading>
          <Text fontSize={'large'}>
            Let's brew up some ideas over a cup of coffee.
          </Text>
        </VStack>
        <Container className="text">
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
        </Container>
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
        <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
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
