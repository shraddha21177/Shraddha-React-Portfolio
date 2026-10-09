import styles from "../Styles/Profile.module.css";
import profileImage from "../assets/PSimgg.jpeg";
import TypingText from "./TypingText";
function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <p className={styles.welcome}>WELCOME TO MY PORTFOLIO</p>
        <TypingText
             words={[
                 "MCA Student",
                 "Web Developer",
                 "Python Learner",
                 "React Developer",
                 "Aspiring Software Developer",
                 ]}/>
        <p>
             I enjoy creating responsive and user-friendly web applications
             using modern technologies.
        </p>

        <h1>
          Hi, I'm <span>Shraddha Ambilduke</span>
        </h1>

        <h2>MCA Student | Web Developer</h2>

        <p>
          I am an MCA student passionate about web development,
          programming and software development.
        </p>

        <div className={styles.buttons}>
            <a href="#contact">
            Contact Me
            </a>

            <a href="https://github.com/shraddha21177" target="_blank" rel="noopener noreferrer">
            View GitHub
            </a>
            <a href="https://www.linkedin.com/in/shraddha-ambilduke" target="_blank" rel="noopener noreferrer">
            View LinkedIn
            </a>
        </div>
        
    
      </div>

      <div className={styles.imageBox}>
        <img src={profileImage} alt="Shraddha Ambilduke" />
      </div>
    </div>
  );
}

export default Profile;