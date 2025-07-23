// try.tsx
import styles from './Try.module.css';

export default function TrySection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.registerSection}>
        <p>
          Don’t miss this <span className={styles.highlight}>opportunity</span> to learn the fundamentals of AI and Machine Learning! 
          Secure your spot now and join us for an engaging <span className={styles.highlight}>webinar</span> filled with insights, real-world examples.
        </p>
        <button className={styles.registerBtn}>Register Now</button>
      </div>

      <div className={styles.footer}>
        <p>Copyright 2025. Vidyamath.com</p>
        <div className={styles.links}>
          <a href="#">Term & Condition</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
