import styles from '../styles/navbar.module.css';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-6 fixed bottom-0 left-0 right-0">
      <div className={`container mx-auto flex items-center justify-between px-8 ${styles.customFont}`}>
      
        <div className="w-1/3 text-left text-sm">
          <a href="mailto:operations@cathartichealth.org" className="text-white">{`operations@cathartichealth.org`}</a>
        </div>
        <div className="w-1/4 text-center">
            <div className="bg-white text-md font-bold bg-opacity-50 text-opacity-100 text-white px-4 py-2">
                Join Our Newsletter
            </div>
        </div>
        <div className="w-1/3 text-right">
          <p className="text-white  text-sm ">© Cathartic. All rights reserved 2022. Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
