import { useRef, useState} from 'react';
import styles from '@styles/Junior.module.scss';
import { JuniorInfo } from './Junior';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export const Carousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [changeImage, setChangeImage] = useState(false);
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
                        <div className={clsx(styles.slide)} key={index}>
                            {changeImage ? (
                                <>
                                    <img src={item.src[1]} alt={`slide-${index}`} draggable={false} />
                                    <h3>{item.name}</h3>
                                    <p>{item.title[1]}</p>
                                </>
                            ) : (
                                <>
                                    <img src={item.src[0]} alt={`slide-${index}`} draggable={false} />
                                    <h3>{item.name}</h3>
                                    <p>{item.title[0]}</p>
                                </>
                            )}
                            <div className={clsx(styles.thumbnail, currentIndex === index ? styles.active : '')}>
                                {item.src.map((src, idx) => (
                                    <img src={src} alt={`thumbnail-${idx}`} draggable={false} 
                                        onClick={() => setChangeImage(idx === 0 ? false: true)}
                                    />
                                ))}
                            </div>
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
