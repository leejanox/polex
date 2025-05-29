import { useRef, useState} from 'react';
import styles from '@styles/Junior.module.scss';
import { JuniorInfo } from './Junior';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export const Carousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 100; // % 기준 한 슬라이드 너비

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) =>( prev - 1)% JuniorInfo.length);
        }
    };
    
    const handleNext = () => {
        if (currentIndex < JuniorInfo.length - 1) {
        setCurrentIndex((prev) =>( prev + 1)% JuniorInfo.length);
        }
    };

    return (
        <div className={styles.carousel}>
            <h2>1학년 생성형 이미지</h2>
            <div className={styles.sliderWrapper}>
                <button className={styles.prev} onClick={handlePrev} disabled={currentIndex === 0}>
                    <ArrowLeft/>
                </button>

                <div className={styles.viewport}>
                    <div
                        ref={containerRef}
                        className={styles.slider}
                        style={{ transform: `translateX(-${currentIndex * slideWidth}%)`,}}
                    >
                    {JuniorInfo.map((item, index) => (
                        <div className={styles.slide} key={index}>
                            <img src={item.src[0]} alt={`slide-${index}`} draggable={false} />
                            <h3>{item.name}</h3>
                            <p>{item.title[0]}</p>
                        </div>
                    ))}
                    </div>
                </div>

                <button
                    className={styles.next}
                    onClick={handleNext}
                    disabled={currentIndex === JuniorInfo.length - 1}
                >
                    <ArrowRight/>
                </button>
            </div>
            <div className={styles.dots}>
                {JuniorInfo.map((_, index) => (
                    <div key={index} className={clsx(styles.dot, {[styles.active]: currentIndex === index})}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};
