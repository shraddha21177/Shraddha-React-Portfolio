import { useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from "../Styles/ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    alert(
      `Thank you ${formData.name}! Your message has been submitted.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className={styles.section}>
      <SectionTitle
        title="Contact Me"
        subtitle="Let's connect and discuss opportunities"
      />

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Job Opportunity">
              Job Opportunity
            </option>
            <option value="Internship">
              Internship
            </option>
            <option value="Project">
              Project
            </option>
            <option value="General">
              General Inquiry
            </option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Write your message..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;