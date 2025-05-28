import { Button, U_Button } from '@components/commons/Buttons';
import { EDdescriptionEnglish, EDdescriptionKorean, EDParticipationList, EDInfo } from './text';
import styles from '@styles/E_introduction.module.scss';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const HeroSection = () => {

    const [isEnglish, setIsEnglish] = useState(false);
    return (
        <div className={styles.section1}>
            <div className={clsx(styles.title)}>
                <div className={clsx(styles.left, styles.item)}>
                    <h1>2025 AI INFINITY</h1>
                    <span>TITLE</span>
                </div>
                <div className={clsx(styles.right)}>
                    <div className={clsx(styles.item)}>
                        <h1>Chuncheon, Korea</h1>
                        <span>LOCATION</span>
                    </div>
                    <div className={clsx(styles.item)}>
                        <h1>2025.06.25 - 2025.06.27</h1>
                        <span>DATE</span>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.videoContainer)}>
                <ReactPlayer url={'https://youtu.be/0EiszP7D1Rw?si=6plNKZzuZ8oDhve7'} 
                    width={'100%'} height={'100%'}
                    loop={true} muted={true} controls={false} playing={true}
                />
            </div>
            <div className={clsx(styles.buttonGroup)}>
                    <Link to={'/학과소개'}>
                        <U_Button>
                            <p>{`학과 소개 \u27AF`}</p>
                        </U_Button>
                    </Link>
                    <a href={'#section2'}>
                        <U_Button>
                            <p>{`오시는길 \u27AF`}</p>
                        </U_Button>
                    </a>
                    <a href={'#section3'}>
                        <U_Button>
                            <p>{`방명록 남기기 \u27AF`}</p>
                        </U_Button>
                    </a>
            </div>
            <div className={clsx(styles.descriptionContainer)}>
                <div className={clsx(styles.introduction,styles.left)}>
                    <h1>전시 소개</h1>
                    <div className={clsx(styles.description)}>
                        {isEnglish ? (
                            <div className={clsx(styles.description,styles.english)}>
                                {EDdescriptionEnglish.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        ) : (
                            <div className={clsx(styles.description,styles.korean)}>
                                {EDdescriptionKorean.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={clsx(styles.participation,styles.right)}>
                    <div className={clsx(styles.people)}>
                        <h1>참여자</h1>
                        {Object.keys(EDParticipationList).map((key)=>(
                            <div key={key} className={clsx(styles.item)}>
                                <h2>{key}</h2>
                                <p>{EDParticipationList[key as keyof typeof EDParticipationList].value}</p>
                            </div>
                        ))}
                    </div>
                    <div className={clsx(styles.info)}>
                        <h1>전시 정보</h1>
                        {Object.keys(EDInfo).map((key)=>(
                            <div key={key} className={clsx(styles.item)}>
                                <h2>{key}</h2>
                                <p>{EDInfo[key as keyof typeof EDInfo].value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
