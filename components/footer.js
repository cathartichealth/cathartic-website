// Footer.js
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-purple-950 text-white py-6 fixed bottom-0 left-0 right-0`}>
      <div className={`container mx-auto flex flex-wrap items-center justify-between px-8 ${styles.customFont}`}>
      
        <div className="text-center w-full sm:w-1/3 text-sm mb-4 sm:mb-0">
          <a href="mailto:operations@cathartichealth.org" className="text-white">{`operations@cathartichealth.org`}</a>
        </div>
        <div className="w-full sm:w-1/4 text-center mb-4 sm:mb-0">
        <button className={styles.newsletterButton}>
          <div className={styles.newsletterText}>Join Our Newsletter</div>
        </button>

        </div>
        <div className="w-full sm:w-1/3 text-center">
          <p className="text-white text-sm">© Cathartic. All rights reserved 2022. Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
