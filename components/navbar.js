import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="pl-4 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white text-purple-900 shadow-lg">
      <div className="p-4 flex items-center">
        <Image src="/cathartic.png" alt="Logo" width={200} height={250} />
      </div>

      {/* Main dropdown for navigation options */}
      <div className="p-4 flex items-center space-x-6 md:hidden">
        <button className="hover:opacity-30" onClick={toggleDropdown}>
          <Image src="/dropdown.png" alt="dropdown" width={60} height={60} />
        </button>
      </div>

      {/* Navigation options */}
      <div className={`hidden md:flex space-x-6 ${styles.customFont}`}>
        <Link className={`hover:text-gray-300 ${router.pathname === '/homepage' ? 'font-bold' : ''}`} href="/homepage">
          Home
        </Link>
        <Link className={`hover:text-gray-300 ${router.pathname === '/model' ? 'font-bold' : ''}`} href="/model">
          Model
        </Link>
        <Link className={`hover:text-gray-300 ${router.pathname === '/programs' ? 'font-bold' : ''}`} href="/programs">
          Programs
        </Link>
        <Link className={`hover:text-gray-300 ${router.pathname === '/about' ? 'font-bold' : ''}`} href="/about">
          About
        </Link>
      </div>

      {isDropdownOpen && (
        <div className=" sm-flex absolute top-full left-0 z-50 bg-white w-full border border-gray-200 shadow-lg py-2">
          <ul className="text-purple-900 text-center">
            <li className="hover:bg-gray-100">
              <Link className={`${router.pathname === '/homepage' ? 'font-bold' : ''}`} href="/homepage">Home</Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link className={`${router.pathname === '/model' ? 'font-bold' : ''}`} href="/model">Model</Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link className={`${router.pathname === '/programs' ? 'font-bold' : ''}`} href="/programs">Programs</Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link className={`${router.pathname === '/about' ? 'font-bold' : ''}`} href="/about">About</Link>
            </li>
            <li className="hover:bg-gray-100">
              <div className="md:flex items-center" >
                <a href="https://www.instagram.com/cathartichealth/" className={`hover:opacity-30 ${styles.circle}`} target="_blank" rel="noopener noreferrer">
                  <Image src="/insta.png" alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://www.linkedin.com/company/cathartichealth/" className={`hover:opacity-30 ${styles.circle}`} target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
                </a>
                <a href="mailto:operations@cathartichealth.org" className={`hover:opacity-30 ${styles.circle}`}>
                  <Image src="/email.png" alt="Email" width={40} height={40}/>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Social icons in the top right corner */}
      <div className="hidden md:flex items-center space-x-4" >
        <a href="https://www.instagram.com/cathartichealth/" className={`hover:opacity-30 ${styles.circle}`} target="_blank" rel="noopener noreferrer">
          <Image src="/insta.png" alt="Instagram" width={60} height={60} />
        </a>
        <a href="https://www.linkedin.com/company/cathartichealth/" className={`hover:opacity-30 ${styles.circle}`} target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={60} height={60} />
        </a>
        <a href="mailto:operations@cathartichealth.org" className={`hover:opacity-30 ${styles.circle}`}>
          <Image src="/email.png" alt="Email" width={60} height={60}/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
