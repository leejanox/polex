//! 2025년 작품 카드
import styles from '@styles/Temi.module.scss';
import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import { TemiData } from './Senior';
import { Github } from 'lucide-react';
import { U_Button } from '@components/commons/Buttons';

export const Temi = () => {

    const data = TemiData[0].data;

    return (
        <div className={styles.Temi}>
            <header>
                <MainHeader />
            </header>
            <div className={styles.container}>
                <section className={styles.left}>
                    <div className={styles.title}> 
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className={styles.introduction}>
                        {data.introduction.split('\n').map((v,i)=>(
                            <p key={i}>{v}<br /></p>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <U_Button>
                            <p> 토리 영상 보기</p>
                        </U_Button>
                        <U_Button>
                            <p> 다음 작품 보기</p>
                        </U_Button>
                    </div>
                </section>
                <aside className={styles.right}>
                    <div className={styles.image}>
                        <img src="/assets/posters/1.jpg" alt="Refik Anadol" />
                    </div>
                    <div className={styles.info}>
                        <h3>팀원 소개</h3>
                        {data.people.map((v,i)=>(
                            <div className={styles.person} key={i}>
                                <div className={styles.name}>
                                    <h4>{v.name.split(' ')[0]}</h4>
                                    <span>{v.name.split(' ')[1]}</span>
                                </div>
                                <p>{v.role}</p>
                            </div>
                        ))}
                        <div className={styles.tags}>
                            {data.skill.map((v,i)=>(
                                <li key={i}>{v}</li>
                            ))}
                        </div>
                    </div>
                    <div className={styles.links}>
                        <Github/>
                        {data.people.filter((v)=>v.link).map((v,i)=>(
                            <a key={i} href={v.link} target="_blank" rel="noopener noreferrer">
                                <span>{v.name.split(' ')[0]} :</span>
                                <p>GitHub</p>
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
            <footer>
                <MainFooter />
            </footer>
        </div>
    )
}
