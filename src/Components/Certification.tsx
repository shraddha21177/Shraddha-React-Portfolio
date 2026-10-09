import { useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from "../Styles/Certification.module.css";

import certificate1 from "../assets/completion.jpeg";
import certificate2 from "../assets/appriciation.jpeg";
import certificate3 from "../assets/Recommendation.jpeg";
import certificate4 from "../assets/EduSkill.jpeg";
import certificate5 from "../assets/EduCompletion.jpeg";
import certificate6 from "../assets/Java.jpeg";
import certificate7 from "../assets/Naandi.jpeg";


interface Certificate {
  title: string;
  organization: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "Web Development Internship",
    organization: "Oasis Infobyte",
    image: certificate1,
  },
  {
    title: "Certificate of Appreciation",
    organization: "Oasis Infobyte",
    image: certificate2,
  },
  {
    title: "Letter of Recommendation",
    organization: "Oasis Infobyte",
    image: certificate3,
  },
  {
    title: "Job Ready Virtual Internship",
    organization: "EduSkills",
    image: certificate4,
  },
  {
    title: "Certificate of Completion",
    organization: "EduSkills",
    image: certificate5,
  },
  {
    title: "Java Full Stack Development",
    organization: "Litsbros",
    image: certificate6,
  },
   {
    title: "Employability Skill Training Programme",
    organization: "Mahindra Pride classroom",
    image: certificate7,
  },
];

function Certification() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section className={styles.section} id="certification">
      <SectionTitle
        title="My Certifications"
        subtitle="Certificates and achievements"
      />

      <div className={styles.grid}>
        {certificates.map((certificate) => (
          <div className={styles.card} key={certificate.title}>
            <div className={styles.imageBox}>
              <img
                src={certificate.image}
                alt={certificate.title}
              />
            </div>

            <div className={styles.content}>
              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              <button
                className={styles.viewButton}
                onClick={() =>
                  setSelectedCertificate(certificate)
                }
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Popup */}

      {selectedCertificate && (
        <div
          className={styles.modal}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <h3>{selectedCertificate.title}</h3>

            <p>{selectedCertificate.organization}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certification;