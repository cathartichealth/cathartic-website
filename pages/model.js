import { useRef } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/model.module.css';
import Card from '../components/card';
import Info from '../components/info';
import ModelSection from "@/components/modelsection";

const inter = Inter({ subsets: ["latin"] });

export default function Model() {
    // Creating references for each section
    const suppliersRef = useRef(null);
    const catharticRef = useRef(null);
    const clientsRef = useRef(null);
    const targetPopulationRef = useRef(null);

    // Function to handle scrolling to a specific section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="program-page bg-white flex min-h-screen flex-col items-center">
            <Navbar />

            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Model</h1>
                <p className={styles.heroBlurb}>
                    Cathartic lessens preventative health inequities for under-resourced populations. 
                    Scroll down to follow the journey of a product donated through our pipeline…
                </p>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.heroButton} 
                        onClick={() => scrollToSection(suppliersRef)}
                    >
                        Suppliers
                    </button>
                    <button 
                        className={styles.heroButton} 
                        onClick={() => scrollToSection(catharticRef)}
                    >
                        Cathartic
                    </button>
                    <button 
                        className={styles.heroButton} 
                        onClick={() => scrollToSection(clientsRef)}
                    >
                        Clients
                    </button>
                    <button 
                        className={styles.heroButton} 
                        onClick={() => scrollToSection(targetPopulationRef)}
                    >
                        Target Population
                    </button>
                </div>
            </section>

            <section ref={suppliersRef}>
                <ModelSection 
                    title="Suppliers"
                    blurb="Corporations provide tax-deductible donations of everyday health and hygiene products to Cathartic’s community partners. Donations are organized into programs, each targeting a specific under-resourced health inequity."
                    image="/supplier.png"
                />
            </section>

            <section ref={catharticRef}>
                <ModelSection 
                    title="Cathartic"
                    blurb="Products are vetted and particularly selected by the Cathartic team for their quality and health benefits. Cathartic handles all of donation logistics between supplier and client, including product type, amount, date, and location. Communication channels are established between the Cathartic team, suppliers, and clients, with consistent updates and feedback for each party. Cathartic aids recipient community organizations in their distribution, providing volunteers, data-tracking, and support in the field."
                    image="/bluelogo.png"
                />
            </section>

            <section ref={clientsRef}>
                <ModelSection 
                    title="Clients"
                    blurb="Community clients receive health and hygiene products directly from our suppliers at no cost of their own. Our “client” designation covers a wide variety of organizations, including public schools, nonprofits, food banks, local clinics, etc. Clients interface with Cathartic to submit donation requests, ensure storage capacity, and verify that their populations want the products they are receiving."
                    image="/client.png"
                />
            </section>

            <section ref={targetPopulationRef}>
                <ModelSection 
                    title="Target Population"
                    blurb="Products are distributed to under-resourced populations that our community clients have established trustworthy relationships with. Cathartic’s data-tracking efforts ensure that target populations can provide feedback and request additional products for future distributions."
                    image="/population.png"
                />
            </section>

            <Footer />
        </main>
    );
}
