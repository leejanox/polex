//! 2024년 작품 카드
import { useEffect, useRef, useState } from 'react';
import type { SeniorCardProps } from './Senior';
import styles from '@styles/Senior.module.scss';
import ReactPlayer from 'react-player';
import { U_Button } from '@components/commons/Buttons';
import clsx from 'clsx';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export const SeniorCard = ({ data, style }: SeniorCardProps) => {

    const [showVideo, setShowVideo] = useState(false);
    const _style = style;

    const videoRef = useRef<HTMLDivElement>(null!);

    useEffect(()=>{
        if(!videoRef.current) return;
        gsap.set(videoRef.current,{
            opacity: 0,
            x: 100,
        })
        gsap.to(videoRef.current,{
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: 'power2.inOut',
        })
    },[showVideo])

    return (
        <div className={clsx(styles.SeniorCard, _style === '2025' ? styles._2025 : '')}>
            <img src={data.imageUrl[0]} alt={data.title} className={styles.image} />

            <div className={styles.info}>
                <p className={styles.category}>{data.category}</p>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.team}>{data.team}</p>
                <div className={clsx(styles.skillContainer, _style === '2025' ? styles._2025 : '')}>
                    {data.skill.map((skill, index) => (
                        <p key={index} className={styles.skill}>{skill}</p>
                    ))}
                </div>
                <p className={styles.date}>{data.date}</p>
                <p className={styles.remaining}>{data.remaining}</p>
            </div>

            <div className={clsx(styles.introduction, _style === '2025' ? styles._2025 : '')}>
                <h3>Introduction</h3>
                <p className={styles.introductionText}>
                    {data.introduction.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </p>
            </div>

            {data.description ? (
                <div className={styles.descriptionBox}>
                    <div className={styles.description}>
                        <h3>Description</h3>
                        <p>{data.description.split('\n').map((line, index) => (
                            <li key={index}>
                                {line}<br />
                            </li>
                        ))}</p>
                    </div>

                    <button onClick={() => setShowVideo((prev) => !prev)} 
                            className={styles.more}
                    >
                        MORE
                    </button>
                </div>
            ) : (
                <div className={clsx(styles.links, _style === '2025' ? styles._2025 : '')}>
                    <Link to={`/senior/${data.title}`}>
                        <U_Button>
                            <p>Explore more</p>
                        </U_Button>
                    </Link>
                </div>
            )}

            {showVideo && (
                <div className={styles.videoWrapper} ref={videoRef}>
                    <ReactPlayer 
                        url={data.videoUrl} 
                        controls={false} 
                        autoPlay={true} 
                        muted={true} 
                        loop={true}
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}
        </div>
    )
}
