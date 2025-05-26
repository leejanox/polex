//! 2024년 작품 카드

import { useState } from 'react';
import type { SeniorCardProps } from './Senior';
import styles from '@styles/Senior.module.scss';
import ReactPlayer from 'react-player';

export const SeniorCard = ({ data }: SeniorCardProps) => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className={styles.SeniorCard}>
            <img src={data.imageUrl} alt={data.title} className={styles.image} />

            <div className={styles.info}>
                <p className={styles.category}>{data.category}</p>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.museum}>{data.museum}</p>
                <p className={styles.location}>{data.location}</p>
                <p className={styles.date}>{data.date}</p>
                <p className={styles.remaining}>{data.remaining}</p>
            </div>

            <div className={styles.descriptionBox}>
                <p className={styles.description}>{data.description}</p>

                <button onClick={() => setShowVideo((prev) => !prev)} className={styles.more}>
                    MORE
                </button>
            </div>

            {showVideo && (
                <div className={styles.videoWrapper}>
                    <ReactPlayer url={data.videoUrl} controls={false} autoPlay muted />
                </div>
            )}
        </div>
    )
}
