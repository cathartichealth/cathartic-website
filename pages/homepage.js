// pages/homepage.js

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const inter = Inter({ subsets: ["latin"] });

export default function Homepage() {
  return (
    
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {
        <h1>hi</h1>

      
      }
      <Navbar />
      <Footer />
    </main>
  );
}
