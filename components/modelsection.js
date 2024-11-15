// components/infoSection.js
import Image from "next/image";
import styles from '../styles/modelsection.module.css';

export default function ModelSection({ title, blurb, image }) {
    return (
        <div className={styles.infoSection}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.blurb}>{blurb}</p>
            </div>
            <div className={styles.imageContainer}>
                <Image src={image} alt={title} width={603} height={453} />
            </div>
        </div>
    );
}
