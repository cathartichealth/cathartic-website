import styles from '../styles/info.module.css';

const Info = ({ data }) => {
  return (
    <div className={`${styles.info} flex flex-col items-center gap-4 p-4`}>
      <div className={styles.imageContainer}>
        <img src={data.imageSrc} alt="info" className={styles.image} />
      </div>
      <button className={styles.button}>
        {data.buttonText}
      </button>
      <p className={styles.description}>{data.description}</p>
      
    </div>
  );
};

export default Info;
