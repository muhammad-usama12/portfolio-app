// import React from "react";
// import { useState, useEffect, useRef } from "react";
// // import sample1 from "./assets/sample1.mov";
// // import sample2 from "./assets/sample2.mov";
// // import sample3 from "./assets/sample3.mov";
// import sample4 from "./assets/sample4.mov";
// // import sample5 from "./assets/sample5.mov";
// // import sample6 from "./assets/sample6.mp4";
// // import sample7 from "./assets/sample7.mp4";
// // import sample8 from "./assets/sample8.mp4";
// // import sample9 from "./assets/sample9.mp4";
// // import sample10 from "./assets/sample10.mp4";
// // import sample11 from "./assets/sample11.mp4";
// // import sample12 from "./assets/sample12.mp4";

// const sampleVideos = [
//   // sample1,
//   // sample2,
//   // sample3,
//   sample4,
//   // sample5,
//   //   sample6,
//   //   sample7,
//   //   sample8,
//   //   sample9,
//   //   sample10,
//   //   sample11,
//   //   sample12,
// ];

// export default function Background() {
//   const [video, currentVideo] = useState();

//   const videoRef = useRef(null);

//   useEffect(() => {
//     const random = Math.floor(Math.random() * sampleVideos.length);
//     currentVideo(sampleVideos[random]);
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       videoRef.current.playbackRate = 1;
//     }
//   }, [video]);

//   return (
//     <div className="background">
//       <video ref={videoRef} src={video} autoPlay loop muted playsInline />
//     </div>
//   );
// }
