import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.wavyText}>
      {"Loading...".split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
} 