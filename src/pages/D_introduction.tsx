import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import styles from '@styles/D_introduction.module.scss';
import { photos, ProfileCard, TextCard, type ProfileCardProps, type TextData } from '@components/D_introduction';
import { Professor, Text, Photo } from '@components/D_introduction';
import ReactPlayer from 'react-player';
import { useState } from 'react';

export const D_introduction = () => {

    const data: ProfileCardProps[] = Professor;
    const text: TextData[] = Text;

    const [currIdx, setCurrIdx] = useState(0);

    return (
        <div className={styles.D_introduction}>
            <header>
                <MainHeader/>   
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>인공지능 SW 융합과</h1>
                        <span>Artificial Intelligence Software Convergence</span>
                    </div>
                    <div className={styles.info}>
                        <h2>한국폴리텍대학 춘천캠퍼스 본관 2층</h2>
                    </div>
                    
                </div>
            </header>
            <div className={styles.container}>
                <section id="section1">
                    <div className={styles.videoContainer}>
                        <ReactPlayer url={'https://youtu.be/j-dK5VcTJIo'} 
                            width={'100%'} height={'100%'}
                            loop={true} muted={true} controls={false} playing={true}
                        />
                    </div>
                </section>
                <section id="section2">
                    <h1>교수진 소개</h1>
                    <div className={styles.profileContainer}>
                        {data.map((v,i)=>(
                            <ProfileCard key={i} data={v}/>
                        ))}
                    </div>
                </section>

                <section id="section3">
                    <h1>학과소개</h1>
                    <TextCard List={text} data={text[0]}/>
                </section>

                <section id="section4">
                    <h1>학과사진</h1>
                    <Photo photos={photos} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
                </section>
            </div>
            <footer>
                <MainFooter/>
            </footer>
        </div>
    )
}
