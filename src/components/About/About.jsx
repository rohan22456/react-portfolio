// import React from "react";

// import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           src={getImageUrl("about/aboutImage.png")}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };



// ------------2nd version ---


import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FaSchool } from "react-icons/fa";

export const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const educationData = [
    {
      title: "B.TECH ( COMPUTER SCIENCE )",
      school: "(TECHNO INDIA UNIVERSITY)",
      date: "2022 - 2026",
      description:
        "A graduate with an aggregate of 8.08 CGPA having good understanding of Software Development Life Cycle.",
    },
    {
      title: "12TH",
      school: "(DOON PUBLIC SCHOOL)",
      date: "2020 - 2021",
      description:
        "Aggregate of 76.2%, Subject: Maths, Physics, Chemistry, English, Painting",
    },
    {
      title: "10TH",
      school: "(ST KAREN'S SECONDARY SCHOOL)",
      date: "~ 2019",
      description: "(75%)",
    },
  ];

  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {educationData.map((edu, index) => (
            <li key={index} className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaSchool /> {edu.title} <span style={{ fontStyle: "italic" }}>{edu.school}</span>
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    marginTop: "4px",
                    color: "#ccc",
                    fontWeight: "bold",
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <span></span>
                  <span>{edu.date} {openIndex === index ? "▲" : "▼"}</span>
                </div>
                {openIndex === index && (
                  <p style={{ marginTop: "0.5rem", color: "#eee" }}>{edu.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
