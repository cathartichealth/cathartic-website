import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import styles from '../styles/homepage.module.css';

import Card from '../components/card';
import Carousel from '../components/carousel';

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
  const cardData1 = {
    imageUrl: 'skinprotection.png',
    title: 'Skin Protection',
    description: 'We give helllla skincare to those in need and sun screen to beat those rays!',
    learnMoreUrl: '/skincare'
  };

  const cardData2 = {
    imageUrl: 'periodcare.png',
    title: 'Period Care',
    description: 'We give helllla skincare to those in need and sun screen to beat those rays!',
    learnMoreUrl: '/skincare'
  };

  const cardData3 = {
    imageUrl: 'foothealth.png',
    title: 'Foot Health',
    description: 'We give helllla skincare to those in need and sun screen to beat those rays!',
    learnMoreUrl: '/skincare'
  };

  return (

    
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar />
      <LogoSection />
      <FactSection />
      <VisionSection />


    <main className={`homepage ${styles.homepage} flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      {
        <h1>hi</h1>

      
      }
      <Navbar />

      <section className="flex place-content-center items-center">
        <div className="w-1/2 p-8 flex flex-col place-content-center">
          <h2 className={`${styles.title} text-center text-3xl font-bold mb-8`}>A Cathartic Vision</h2>
          <div className={`${styles.description} text-center text-lg mb-6 w-4/5 xl:w-3/5 mx-auto`}>
          <p>
            Cathartic strives to elevate the preventative health of under-resourced populations.
            We create sustainable donation relationships between corporate suppliers and community clients to reallocate health and hygiene products within urban communities.
          </p>
          </div>
          <div className="w-4/5 xl:w-3/5 mx-auto">
            <button className={`${styles.text} bg-white py-2 px-4 hover:opacity-80 transition duration-300`}>
              View Our Model
            </button>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3">
          <Carousel />
        </div>
      </section>


      <div>
        <div className={`${styles.title} text-center p-3`}>
          <p>Our Programs</p>
        </div>

        <div className="flex justify-center gap-14">
          <Card data={cardData1}/>
          <Card data={cardData2}/>
          <Card data={cardData3}/>
        </div>
      </div>
      


      <Footer />
      
    </main>

  );
}
