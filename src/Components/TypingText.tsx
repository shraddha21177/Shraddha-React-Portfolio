import { useEffect, useState } from "react";
import styles from "../Styles/TypingText.module.css";

interface TypingTextProps {
  words: string[];
}

function TypingText({ words }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <div className={styles.typing}>
      {text}
      <span className={styles.cursor}>|</span>
    </div>
  );
}

export default TypingText;