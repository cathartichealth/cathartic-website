// Card.js
import { useState } from 'react';
import styles from '../styles/card.module.css';

const Card = ({ data }) => {
  const { imageUrl, title, description, learnMoreUrl } = data;
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={flipCard}>
      <div className={`${styles.front}`}>
        <h2 className={styles.title}>{title}</h2>
        <img src={imageUrl} alt={title} className={styles.image} /> 
      </div>
      <div className={`${styles.back}`}>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
