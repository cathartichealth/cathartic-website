import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import styles from '../styles/about.module.css';
import Card from '../components/card';
import Info from '../components/info';
import Carousel from '../components/carousel';

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    const cardData1 = {
      imageUrl: 'ppl.png',
      title: 'Operations',
      description: 'We provide skin care and sunscreen products to those in need. Sunscreen is expensive, and protection from UV light is extremely important to prevent skin cancer.',
      learnMoreUrl: '/skincare'
    };
  
    const cardData2 = {
      imageUrl: 'ppl.png',
      title: 'Marketing',
      description: 'We give out period care projects, such as pads, tampons, and panty liners to those who need greater access to these resources. These products are especially expensive and single use.',
      learnMoreUrl: '/periodcare'
    };
  
    const cardData3 = {
      imageUrl: 'ppl.png',
      title: 'Human Resources',
      description: 'The homeless population of Los Angeles seriously lacks proper clothing to protect them from their physical environment. One such piece of clothing that is commonly missing are socks.',
      learnMoreUrl: '/foothealth'
    };

    const cardData4 = {
        imageUrl: 'ppl.png',
        title: 'Technology',
        description: 'The homeless population of Los Angeles seriously lacks proper clothing to protect them from their physical environment. One such piece of clothing that is commonly missing are socks.',
        learnMoreUrl: '/foothealth'
      };
  
    const dummyData1 = {
      imageSrc: 'Community.png',
      buttonText: 'Community',
      description: 'Our program design and product selections are determined by our communities’ needs and input. Community voice and choice is at the heart of Cathartic’s work.',
    };
    
    const dummyData2 = {
      imageSrc: 'Collaboration.png',
      buttonText: 'Collaboration',
      description: 'We bring together a variety of stakeholders to the same table, ensuring that their collaboration improves community health.',
    };
    
    const dummyData3 = {
      imageSrc: 'Contact.png',
      buttonText: 'Connectivity',
      description: 'Our users access an ever-growing network and can connect with various partners for future giving relationships.',
    };
    
    return (
      <main
        className={`homepage ${styles.about} bg-white flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar />
  
        <div className={`${styles.title} mt-24 text-center p-3`}>
          <p>About Us</p>
        </div>
  
        <div className={`${styles.description} text-center text-lg mb-6 w-4/5 xl:w-3/5 mx-auto`}>
        <p> Our mission is to cultivate meaningful giving relationships to improve the preventative health of under-resourced populations. </p>
  
          </div>

  
        <div className={`${styles.title} text-center p-3`}>
          <p>Values</p>
        </div>
  
        <div>
          
  
          <div className="grid grid-cols-3 gap-14 justify-center mb-8 items-center">
            <Info data={dummyData1} />
            <Info data={dummyData2} />
            <Info data={dummyData3} />
          </div>


          <div className={`${styles.title} text-center p-3`}>
            <p>Our Team</p>
          </div>

          <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 gap-10">
            <Card data={cardData1} />
            <Card data={cardData2} />
            <Card data={cardData3} />
            <Card data={cardData4} />
          </div>
        </div>
        </div>
  
        <Footer />
      </main>
    );
  }
  