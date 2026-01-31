// import React from "react";
// import styles from "./ComingSoon.module.css";

// const ComingSoon = () => {
//   return (
//     <div className={styles["coming-container"]}>
//       <h1>Mahi Agency</h1>

//       <h2>🛒 Online Store Coming Soon</h2>

//       <p>
//         Hum jald hi apni online shopping service start kar rahe hain.
//       </p>

//       <p>
//         📞 9519197798 <br />
//         📧 mahiagency04@gmail.com
//       </p>
//     </div>
//   );
// };

// export default ComingSoon;

import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles["coming-container"]}>
      {/* Agar aapke paas logo hai to uncomment karo */}
      {/* <img src="/logo.png" alt="Mahi Agency Logo" className={styles.logo} /> */}

      <h1>Mahi Agency</h1>

       <h3>🏥 Medical Agency</h3>

      <h2>🛒 Online Store Coming Soon</h2>

      <p>
        हम जल्द ही अपनी ऑनलाइन शॉपिंग सेवा शुरू करने जा रहे हैं।
      </p>

      <p>
        <strong>GSTIN:</strong> 09XXXXXXXXXX1Z5
      </p>

      <p className={styles.contact}>
        📞 <a href="tel:9519197798">9519197798</a> <br />
  📧 <a href="mailto:mahiagency04@gmail.com">mahiagency04@gmail.com</a>
      </p>
    </div>
  );
};

export default ComingSoon;


// import React, { useEffect, useState } from "react";
// import styles from "./ComingSoon.module.css";

// const ComingSoon = () => {
//   // Countdown Timer Setup
//   const calculateTimeLeft = () => {
//     const launchDate = new Date("2026-02-10T00:00:00"); // change launch date here
//     const difference = launchDate - new Date();
//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className={styles["coming-container"]}>
//       {/* Floating particles */}
//       <div className={styles.particles}>
//         {[...Array(30)].map((_, i) => (
//           <div key={i} className={styles.particle}></div>
//         ))}
//       </div>

//       <h1 className={styles.fadeIn}>Mahi Agency</h1>
//       <h2 className={styles.fadeIn}>🛒 Online Store Coming Soon</h2>
//       <p className={styles.fadeIn}>
//         हम जल्द ही अपनी ऑनलाइन शॉपिंग सेवा शुरू करने जा रहे हैं।
//       </p>

//       {/* Countdown Timer */}
//       <div className={styles.countdown}>
//         {timeLeft.days !== undefined ? (
//           <>
//             <div>
//               <span>{timeLeft.days}</span>
//               <small>Days</small>
//             </div>
//             <div>
//               <span>{timeLeft.hours}</span>
//               <small>Hours</small>
//             </div>
//             <div>
//               <span>{timeLeft.minutes}</span>
//               <small>Minutes</small>
//             </div>
//             <div>
//               <span>{timeLeft.seconds}</span>
//               <small>Seconds</small>
//             </div>
//           </>
//         ) : (
//           <p>Launching Soon!</p>
//         )}
//       </div>

//       {/* Notify Button */}
//       <button className={styles["notify-btn"]}>Notify Me</button>
//     </div>
//   );
// };

// export default ComingSoon;
