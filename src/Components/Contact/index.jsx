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
          >
            CONTACT ME!
          </Heading>
          <Svg
            className={'blobs-contact'}
            svg1={
              <svg
                id="visual"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(461.50408247489185 278.7692931145358)">
                  <path
                    id="blob5"
                    d="M148.2 -93.8C196.3 -57.9 242.4 4 235.6 61.8C228.8 119.6 169.1 173.3 105.7 194.2C42.2 215 -24.9 203 -91.8 176.3C-158.8 149.6 -225.6 108.2 -249.3 45.3C-272.9 -17.6 -253.3 -102 -204.6 -138.2C-155.8 -174.3 -77.9 -162.1 -13.9 -151C50 -139.9 100.1 -129.8 148.2 -93.8"
                    fill="#524b42"
                  ></path>
                </g>
                <g transform="translate(473.7794098292923 284.81386846306543)">
                  <path
                    id="blob6"
                    d="M153.8 -104.8C195.6 -70.3 223.1 -6.6 208 42.7C192.9 91.9 135.3 126.6 75.6 154.3C15.9 182 -45.8 202.7 -107.5 187C-169.2 171.2 -230.9 119 -251.6 50.9C-272.4 -17.2 -252.3 -101.2 -203.5 -137.3C-154.8 -173.5 -77.4 -161.7 -10.7 -153.2C56 -144.7 112.1 -139.4 153.8 -104.8"
                    fill="#524b42"
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
