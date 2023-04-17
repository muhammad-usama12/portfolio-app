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
      <Container className="container ">
        <VStack className="contact-title">
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={forMobile ? '10px' : '30px'}
            fontFamily={'Yeseva One, cursive'}
          >
            CONTACT ME!
          </Heading>
          <Svg
            className={'blobs-contact'}
            svg1={
              <svg
                className="blob-motion"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(384.7851457789969 372.01523552342235)">
                  <path
                    id="blob5"
                    d="M178.8 -181.3C238.8 -118.8 299.4 -59.4 298 -1.4C296.6 56.6 233.1 113.1 173.1 136.6C113.1 160 56.6 150.3 -4 154.3C-64.6 158.3 -129.2 176 -153.8 152.6C-178.5 129.2 -163.2 64.6 -159.7 3.5C-156.2 -57.5 -164.4 -115 -139.7 -177.5C-115 -240 -57.5 -307.5 0.9 -308.5C59.4 -309.4 118.8 -243.8 178.8 -181.3"
                    fill="#eaee5f"
                  ></path>
                </g>
                <g transform="translate(419.4852057118256 293.4180679133859)">
                  <path
                    id="blob6"
                    d="M125.3 -107.6C184.3 -66.3 269.1 -33.1 288.6 19.5C308.1 72.1 262.2 144.2 203.2 189.2C144.2 234.2 72.1 252.1 -6.6 258.7C-85.3 265.3 -170.6 260.6 -205.3 215.6C-240 170.6 -224 85.3 -225.5 -1.5C-227.1 -88.4 -246.1 -176.8 -211.4 -218.1C-176.8 -259.4 -88.4 -253.7 -27.6 -226.1C33.1 -198.5 66.3 -149 125.3 -107.6"
                    fill="#eaee5f"
                    visibility={'hidden'}
                  ></path>
                </g>
              </svg>
            }
          />
          <Text fontWeight={'semibold'}>
            Let's brew up some ideas over a cup of coffee.
          </Text>
        </VStack>
        <Container className="text">
          <FormControl className="contact-form">
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
