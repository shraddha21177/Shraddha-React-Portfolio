import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certification from "./Components/Certification";
import Examination from "./Components/Examination";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Stats from "./Components/Stats";
import Timeline from "./Components/Timeline";
import BackToTop from "./Components/BackToTop";
import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="certification">
          <Certification />
        </section>

        <section id="examination">
          <Examination />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

       <BackToTop />

      <footer>
        <p>© 2026 Shraddha Ambilduke | React + TypeScript</p>
      </footer>
    </>
  );

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
}

export default App;