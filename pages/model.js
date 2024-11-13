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

        <section className={styles.problemSection}>
            <div className={styles.container}>
                <h2 className={styles.problemTitle}>The Problem</h2>
                <p className={styles.problemText}>
                    The Skin Protection Program is an initiative that provides sunscreen to unhoused populations in Los Angeles County. Bare Republic worked with Cathartic, a health equity organization, and local LA nonprofits to distribute 700+ bottles of sunscreen. In addition, Bare Republic aims to educate these populations about the importance of sunscreen and skin protection.
                </p>

                <div className={styles.images}>
                    <Image
                        src='/beach.png'
                        alt="Skin Care Program At The Beach"
                        width={450}
                        height={400}
                        className={styles.image}
                    />
                    <Image
                        src='/shareameal.png'
                        alt="Share A Meal Program"
                        width={450}
                        height={400}
                        className={styles.image}
                    />
                    <Image
                        src='/tents.png'
                        alt="Tents"
                        width={450}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>

        <section className={styles.dataChartSection}>
            <div className={styles.dataContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        src='/placeholderdata.png'
                        alt="Data Chart Image"
                        width={670}
                        height={670}
                        className={styles.dataImage}
                    />
                </div>
                <div className={styles.dataContent}>
                    <h2 className={styles.dataTitle}>Data Chart</h2>
                    <p className={styles.dataText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                    </p>
                    <div className={styles.dataStats}>
                        <div>Units Distributed: 2,360</div>
                        <div>People Supported: 2,360</div>
                        <div>Amount of Products Distributed: $110,000</div>
                        <div>Number of Partners: 16</div>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.benefitSection}>
            <div className={styles.benefitContainer}>
                <div className={styles.benefitContent}>
                    <h2 className={styles.benefitTitle}>Benefit of this Service</h2>
                    <p className={styles.benefitText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                    </p>
                    <div className={styles.benefitStats}>
                        <div>Units Distributed: 2,360</div>
                        <div>People Supported: 2,360</div>
                        <div>Amount of Products Distributed: $110,000</div>
                        <div>Number of Partners: 16</div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src='/placeholderdata.png'
                        alt="Benefit Image"
                        width={670}
                        height={670}
                        className={styles.benefitImage}
                    />
                </div>
            </div>
        </section>


        <section className={styles.featuresSection}>
            <h2 className={styles.featuresTitle}>Features of Service</h2>
            <p className={styles.featuresText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
            </p>
            <div className={styles.featuresImageContainer}>
                <Image
                    src='/placeholderdata.png'
                    alt="Laptop Mockup"
                    width={874}
                    height={874}
                    className={styles.featuresImage}
                />
            </div>
        </section>


        </main>
    )
}