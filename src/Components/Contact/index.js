import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import {
  Heading,
  useMediaQuery,
  Container,
  VStack,
  Text,
  FormControl,
} from '@chakra-ui/react';
import Svg from '../Svg';

function Contact() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 900px)',
  );
  const form = useRef();
  const position = [43.856098, -79.337021];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
    );
    // .then(
    //   () => {
    //     // alert('Email Sent Successfully!');
    //     window.location.reload();
    //   },
    //   () => {
    //     alert('Email failed!');
    //     window.location.reload(true);
    //   },
    // );
  };

  return (
    <>
      <Container className="container">
        <VStack className="contact-title">
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={forMobile ? '10px' : '30px'}
            textColor={'#9c6167'}
          >
            CONTACT ME!
          </Heading>

          {forMobile ? (
            <Svg
              svg1={
                <svg
                  id="visual"
                  viewBox="175 125 650 900"
                  width="375"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(482.20104820007896 268.46618056079257)">
                    <path
                      id="blob5"
                      d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                      fill="#f8f4f3"
                    ></path>
                  </g>{' '}
                  <g transform="translate(431.04357176764483 251.8591471748567)">
                    <path
                      id="blob6"
                      d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                      fill="#f8f4f3"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />
          ) : (
            <Svg
              svg1={
                <svg
                  id="visual"
                  viewBox="0 200 960 540"
                  width="750"
                  height="540"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(482.20104820007896 268.46618056079257)">
                    <path
                      id="blob5"
                      d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                      fill="#f8f4f3"
                    ></path>
                  </g>{' '}
                  <g transform="translate(431.04357176764483 251.8591471748567)">
                    <path
                      id="blob6"
                      d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                      fill="#f8f4f3"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />
          )}
          <Text
            fontWeight={'hairline'}
            textAlign={'center'}
            fontSize={forMobile ? '14px' : '18px'}
          >
            Let's brew up some ideas over a cup of coffee ☕️
          </Text>
        </VStack>
        <Container className="text">
          <FormControl className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="form">
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
                  <button
                    className="submit-btn"
                    type="submit"
                    value="Send"
                    onSubmit={() => window.location.reload()}
                  >
                    Send
                  </button>
                </li>
              </ul>
            </form>
          </FormControl>
        </Container>
      </Container>
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
