import styles from './TruckOptions.module.css';

export default function TruckOptions({ option }) {
  return (
    <div className={styles.content}>
      <div></div>
      <p className={styles.info}>{option}</p>
    </div>
  );
}
