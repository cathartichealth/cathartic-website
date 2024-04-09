import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/homepage.module.css';
const inter = Inter({ subsets: ["latin"] });

const LogoSection = () => {
  return (
    <section className={styles.logoSection}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="/Logo.png" alt="Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className={styles.slogan}>The supply matchmaker for equitable health and hygiene</p>
    </section>
  );
}

const FactSection = () => {
  return (
    <section className={styles.factSection}>
      <div className={styles.factContainer}>
        <div className={styles.fact}>
          <p>$315,000</p>
          <p>worth of donated product</p>
        </div>
        <div className={styles.fact}>
          <p>179,000</p>
          <p>total units donated</p>
        </div>
        <div className={styles.fact}>
          <p>22</p>
          <p>total donors and recipients</p>
        </div>
      </div>
    </section>
  );
}

const VisionSection = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.visionContainer}>
        <div className={styles.visionContent}>
          <h2>A Cathartic Vision</h2>
          <p>Cathartic strives to elevate the preventative health of under-resourced populations. We create sustainable donation relationships between corporate suppliers and community clients to reallocate health and hygiene products within urban communities.</p>
          <button>View our model</button>
        </div>
        <div className={styles.visionImage}>
          <Image src="/Product.png" alt="Product" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}




export default function Homepage() {
  return (
    
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar />
      <LogoSection />
      <FactSection />
      <VisionSection />
      <Footer />
    </main>
  );
}
