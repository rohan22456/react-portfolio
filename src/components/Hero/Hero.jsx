// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Rohan</h1>
//         <p className={styles.description}>
//           I'm Golu i have experience in driving any car and sleeping in afternoon
//         </p>
//         <a href="mailto:myemail@email.com" className={styles.contactBtn}>
//           Contact Me
//         </a>
//       </div>
//       {/* <img
//         src={getImageUrl("hero/heroImage.png")}
//         alt="Hero image of me"
//         height ="350px"
//         className={styles.heroImg}
//       /> */}
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };


// // -----v2-------------



import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HEY, I AM ROHAN 👋</h1>
        <h2 className={styles.subtitle}>I AM A SOFTWARE DEVELOPER</h2>

        <ul className={styles.features}>
          <li>💻 A Computer Science 4th Year Student.</li>
          <li>🧑‍💻 A Passionate Web Developer Exploring The Edges Of Full Stack JavaScript.</li>
          <li>😎 Proficient In Building End-to-End JavaScript Web Applications.</li>
        </ul>

        <div className={styles.buttons}>
          <a className={styles.resumeBtn} href="https://drive.google.com/drive/folders/1G_AaaJ0mUf1bFgzKbD93c5ByfOEwy3_7?usp=sharing" target="_blank">
            RESUME <span>🔗</span>
          </a>
          <a className={styles.hireBtn} href="mailto:myemail@email.com">
            HIRE ME
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
