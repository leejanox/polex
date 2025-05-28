import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import { HeroSection,KakaoMap, GuestBook } from '@components/E_introduction';
import styles from '@styles/E_introduction.module.scss';
import { MapPin, Phone, TramFront, TrendingUp } from 'lucide-react';
import { useCopy } from '@hooks/useCopy';
import { useEffect } from 'react';
//! 1. 전시소개 , 오시는길
export const E_introduction = () => {

    const {copy,isCopied} = useCopy({text:'02-541-8888'});

    useEffect(()=>{
        if(isCopied){
            alert('복사되었습니다.');
        }
    },[isCopied]);

    return (
        <div className={styles.E_introduction}>
            <header>
                <MainHeader/>
            </header>
            <div className={styles.container}>
                <section id="section1">
                    <HeroSection/>  
                </section>            

                <section id="section2">
                    <div className={styles.map}>
                        <h1>오시는 길</h1>
                        <KakaoMap/>                
                        <div className={styles.info}>
                            <div className={styles.item}>
                                <MapPin/>
                                <p>강원 춘천시 영서로 2260 1층 문화공간역</p>
                            </div>
                            <div className={styles.item}>
                                <Phone/>
                                <p onClick={copy}>02-541-8888</p>
                            </div>      
                            <div className={styles.item}>
                                <TramFront/>
                                <p>(경춘) 남춘천역 3번 출구에서 16m</p>
                            </div>
                            <div className={styles.item}>
                                <TrendingUp/>
                                <p>남춘천 역 2번 출구에서 내려오면 바로 앞에 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section3">
                    <GuestBook/>
                </section>
            </div>
            <footer>
                <MainFooter/>
            </footer>
        </div>
    );
}
