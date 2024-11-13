import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/program.module.css';
import Card from '../components/card';
import Info from '../components/info';

const inter = Inter({ subsets: ["latin"] });

export default function ProgramPage() {
    return (
        <main className={`program-page ${styles.program} bg-white flex min-h-screen flex-col items-center ${inter.className}`}>
            <Navbar />
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <Image
                src='/ppl.png'
                alt="Skin Care Program Background"
                layout="fill"
                objectFit="cover"
                className={styles.backgroundImage}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>Skin Care Program</h1>
                <p className={styles.caption}>
                Skin health is a critical quality of life concern and for those without daily sun protection products, they are disproportionately at risk for countless diseases from skin cancer to eczema.
                </p>
                <button className={styles.donateButton}>DONATE NOW</button>
            </div>
        </section>
        </main>
    )
}