//! 2025년 작품 카드
import styles from '@styles/Temi.module.scss';
import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import { TemiData } from './Senior';

export const Temi = () => {

    const data = TemiData[0].data;

    return (
        <div className={styles.Temi}>
            <header>
                <MainHeader />
            </header>
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
                
            </section>
            <aside className={styles.right}>
                <div className={styles.image}>
                    <img src="/assets/posters/1.jpg" alt="Refik Anadol" />
                </div>
                <div className={styles.info}>

                </div>
                <div className={styles.links}>

                </div>
            </aside>
            <footer>
                <MainFooter />
            </footer>
        </div>
    )
}
