import styles from '@styles/D_introduction.module.scss';
import { type TextData } from './index';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroductionProps {
    data: TextData
}

export const Introduction = ({data}: IntroductionProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const exampleRef = useRef<HTMLDivElement>(null);
    const sloganRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power2.out',
            });

            gsap.from(titleRef.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out',
            });

            gsap.from(sloganRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out',
            });

            const descriptionChildren = descriptionRef.current?.children;

            if(descriptionChildren){
                gsap.from(
                    descriptionChildren,{
                        opacity: 0,
                        y: 10,
                        stagger: 0.1,
                        duration: 0.6,
                        delay: 0.8,
                        ease: 'power2.out',
                    }
                );
            }

            gsap.from(exampleRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 1.2,
                ease: 'power2.out',
            });
        }, ref);

        return () => ctx.revert();
    }, [data]);
    return (
        <div ref={ref} className={styles.introduction} id={data.id.toString()}>
            <div className={styles.container}>
                <div ref={titleRef} className={styles.title}>
                    <h1>{data.title}</h1>
                    <p ref={sloganRef} >{data.slogan}</p>
                </div>
                <div className={styles.description}>
                    <div  className={styles.description_text}>
                        {data.description.split('\n').map((line, index) => (
                            <p ref={descriptionRef} key={index}>{line}</p>
                        ))}
                    </div>
                    <div ref={exampleRef} className={styles.description_example}>
                        {data.example.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

