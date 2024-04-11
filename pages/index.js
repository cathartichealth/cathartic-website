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
    <section className={`${styles.logoSection} flex`}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo"  />
        </div>
        <p className={styles.slogan}>The supply matchmaker for equitable health and hygiene</p>
      </div>
    </section>
  );
}

const FactSection = () => {
  return (
    <section className={styles.factSection}>
      <div className={styles.factContainer}>
        <div className={styles.fact}>
          <p className={styles.num}>$315,000</p>
          <p>worth of donated product</p>
        </div>
        <div className={styles.fact}>
          <p className={styles.num} >179,000</p>
          <p>total units donated</p>
        </div>
        <div className={styles.fact}>
          <p className={styles.num} >22</p>
          <p>total donors and recipients</p>
        </div>
      </div>
    </section>
  );
}

const VisionSection = () =>
{
  return (
    <section className="m-4 flex place-content-center items-center">
        <div className="w-1/2 p-8 flex flex-col place-content-center">
          <h2 className={`${styles.title} text-center text-3xl font-bold mb-8`}>A Cathartic Vision</h2>
          <div className={`${styles.description} text-center text-lg mb-6 w-4/5 xl:w-3/5 mx-auto`}>
            <p>
              Cathartic strives to elevate the preventative health of under-resourced populations.
              We create sustainable donation relationships between corporate suppliers and community clients to reallocate health and hygiene products within urban communities.
            </p>
          </div>
          <div className="w-4/5 flex place-content-center xl:w-3/5 mx-auto">
            <button className={`${styles.text} text-center bg-white py-2 hover:opacity-80 transition duration-300`}>
              View Our Model
            </button>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3">
          <Carousel />
        </div>
      </section>
  );
}



export default function Home() {
  const cardData1 = {
    imageUrl: 'skinprotection.png',
    title: 'Skin Protection',
    description: 'We provide skin care and sunscreen products to those in need. Sunscreen is expensive, and protection from UV light is extremely important to prevent skin cancer.',
    learnMoreUrl: '/skincare'
  };

  const cardData2 = {
    imageUrl: 'periodcare.png',
    title: 'Period Care',
    description: 'We give out period care projects, such as pads, tampons, and panty liners to those who need greater access to these resources. These products are especially expensive and single use.',
    learnMoreUrl: '/periodcare'
  };

  const cardData3 = {
    imageUrl: 'foothealth.png',
    title: 'Foot Health',
    description: 'The homeless population of Los Angeles seriously lacks proper clothing to protect them from their physical environment. One such piece of clothing that is commonly missing are socks.',
    learnMoreUrl: '/foothealth'
  };

  return (
    
    <main
      className={`homepage ${styles.homepage} bg-white flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar />
      <LogoSection />
      <FactSection />
      <VisionSection />

      


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
