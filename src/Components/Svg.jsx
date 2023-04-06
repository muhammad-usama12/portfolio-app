import React, { useEffect } from 'react'
import KUTE from 'kute.js'

function Svg() {
  useEffect(() => {
    KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: Infinity, duration: 5000, yoyo: true },
    ).start()
  })
  useEffect(() => {
    KUTE.fromTo(
      '#blob3',
      { path: '#blob3' },
      { path: '#blob4' },
      { repeat: Infinity, duration: 5000, yoyo: true },
    ).start()
  })
  useEffect(() => {
    KUTE.fromTo(
      '#blob5',
      { path: '#blob5' },
      { path: '#blob6' },
      { repeat: Infinity, duration: 5000, yoyo: true },
    ).start()
  })
  return (
    <div className="blobs">
      {' '}
      <svg
        className="blob-motion"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(444.3945315935872 301.5419859094067)">
          <path
            id="blob1"
            d="M161.3 -154.8C211.3 -111.3 255.6 -55.6 245.5 -10.1C235.4 35.4 170.7 70.7 120.7 111.4C70.7 152 35.4 198 -15.4 213.5C-66.2 228.9 -132.5 213.8 -177.3 173.1C-222.1 132.5 -245.6 66.2 -231.8 13.8C-218 -38.7 -167 -77.3 -122.1 -120.8C-77.3 -164.3 -38.7 -212.7 8.5 -221.1C55.6 -229.6 111.3 -198.3 161.3 -154.8"
            fill="#59846e"
          ></path>
        </g>
        <g transform="translate(481.7279411731546 269.91730261535724)">
          <path
            id="blob2"
            d="M111.6 -112.4C139.2 -83.9 152.6 -42 165.5 12.8C178.3 67.6 190.6 135.3 163 176C135.3 216.6 67.6 230.3 16.1 214.2C-35.4 198 -70.7 152 -120.7 111.4C-170.7 70.7 -235.4 35.4 -242.4 -7.1C-249.5 -49.5 -199 -99 -149 -127.5C-99 -156 -49.5 -163.5 -3.8 -159.7C42 -156 83.9 -140.9 111.6 -112.4"
            fill="#59846e"
            visibility={'hidden'}
          ></path>
        </g>
      </svg>
      <svg
        className="blob-motion"
        viewBox="0 0 1080 1920"
        width="1080"
        height="1920"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(525.2458067605326 947.1918771324838)">
          <path
            id="blob3"
            d="M287.5 -271.5C377.5 -197.5 458.8 -98.8 441.2 -17.6C423.6 63.6 307.3 127.3 217.3 213C127.3 298.6 63.6 406.3 -25.2 431.5C-114.1 456.7 -228.2 399.5 -301.5 313.8C-374.8 228.2 -407.4 114.1 -413.2 -5.8C-419 -125.6 -397.9 -251.3 -324.6 -325.3C-251.3 -399.3 -125.6 -421.6 -13.4 -408.2C98.8 -394.8 197.5 -345.5 287.5 -271.5"
            fill="#565229"
          ></path>
        </g>
        <g transform="translate(489.7542954919947 949.9233004603974)">
          <path
            id="blob4"
            d="M237.1 -212.4C327.1 -147.1 433.5 -73.5 442.4 8.8C451.2 91.2 362.4 182.4 272.4 247.9C182.4 313.4 91.2 353.2 3.1 350.2C-85.1 347.1 -170.2 301.2 -236.8 235.7C-303.5 170.2 -351.8 85.1 -341 10.7C-330.3 -63.6 -260.6 -127.3 -194 -192.6C-127.3 -258 -63.6 -325 4.9 -329.9C73.5 -334.9 147.1 -277.7 237.1 -212.4"
            fill="#565229"
            visibility={'hidden'}
          ></path>
        </g>
      </svg>
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
      {/* <svg
        className="blob-motion
      "
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="14.444444444444446%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
            <stop
              offset="85.55555555555554%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="14.444444444444446%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
            <stop
              offset="85.55555555555554%"
              stop-color="#fbae3c"
              stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
            <stop
              offset="14.444444444444446%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
            <stop
              offset="85.55555555555554%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
            <stop
              offset="14.444444444444446%"
              stop-color="#fbae3c"
              stop-opacity="1"
            ></stop>
            <stop
              offset="85.55555555555554%"
              stop-color="#ffffff"
              stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <g transform="translate(960, 0)">
          <path
            id="blob1"
            d="M0 486C-59.3 495.9 -118.7 505.8 -150.2 462.2C-181.7 418.6 -185.5 321.6 -194 267C-202.5 212.3 -215.8 200.1 -260.5 189.3C-305.2 178.5 -381.4 169.1 -424.2 137.8C-467 106.5 -476.5 53.3 -486 0L0 0Z"
            fill="#ffd69f"
          ></path>
          <path
            id="blob2"
            d="M0 243C-29.7 247.9 -59.3 252.9 -75.1 231.1C-90.9 209.3 -92.7 160.8 -97 133.5C-101.2 106.2 -107.9 100 -130.3 94.6C-152.6 89.2 -190.7 84.6 -212.1 68.9C-233.5 53.3 -238.2 26.6 -243 0L0 0Z"
            fill="#ffffff"
          ></path>
        </g>
        <g transform="translate(0, 540)">
          <path
            d="M0 -486C34.3 -427.3 68.5 -368.6 116.5 -358.5C164.5 -348.5 226.2 -386.9 278.6 -383.5C331 -380 374.2 -334.6 393.2 -285.7C412.2 -236.7 407 -184.2 418.5 -136C429.9 -87.8 458 -43.9 486 0L0 0Z"
            fill="#ffd69f"
          ></path>
          <path
            d="M0 -243C17.1 -213.7 34.3 -184.3 58.2 -179.3C82.2 -174.2 113.1 -193.5 139.3 -191.7C165.5 -190 187.1 -167.3 196.6 -142.8C206.1 -118.4 203.5 -92.1 209.2 -68C215 -43.9 229 -21.9 243 0L0 0Z"
            fill="#ffffff"
          ></path>
        </g>
      </svg> */}
    </div>
  )
}

export default Svg
