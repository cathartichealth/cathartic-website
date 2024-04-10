import { useState } from 'react';
import styles from '../styles/carousel.module.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const images = [
        "home1.png",
        "periodcare.png",
        "skinprotection.png",
        "foothealth.png"
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={`${styles['animation-carousel']} relative w-full`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`${styles['carousel-container']} justify-center overflow-hidden h-full`}>
            {images.map((image, index) => (
                    <div key={index} className={`${styles['carousel-item']} ${index === activeIndex ? 'block' : 'hidden'}`}>
                        <div className="flex justify-center items-center h-full">
                            <img src={image} className={`${styles['carousel-image']} block`} alt="" />
                        </div>
                    </div>
                ))}

                {isHovered && (
                    <div className="absolute bottom-0 gap-10 w-full flex justify-center">
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                            onClick={prevSlide}
                        >
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                            onClick={nextSlide}
                        >
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Carousel;
