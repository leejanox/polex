import { SeniorCard } from '@components/Students';
import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import styles from '@styles/Senior.module.scss';
import { SeniorData } from '@components/Students';
import { useState } from 'react';
import { U_Button } from '@components/commons/Buttons';
import { SeniorCard2 } from '@components/Students';

export const Senior = () => {

    const datas = SeniorData;

    const [past, setPast] = useState(false);

    const handlePast = () => {
        setPast(true);
    }

    const handleCurrent = () => {
        setPast(false);
    }

    return (
        <div className={styles.Senior}>       
            <header>
                <MainHeader />
            </header>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>2학년 작품</h1>
                </div>
                <div className={styles.filter}>
                    <U_Button onClick={handleCurrent}>
                        <p>2025년 작품 보기</p>
                    </U_Button>
                    <U_Button onClick={handlePast}>
                        <p>2024년 작품 보기</p>
                    </U_Button>
                </div>
                {past ? (
                    <div className={styles.content}>
                        {datas.map((v,i)=>(
                            <SeniorCard key={i} data={v.data}/>
                        ))}
                    </div>
                ) : (
                    <div className={styles.content}>
                        <SeniorCard2 />
                    </div>
                )}
            </div>
            <footer>
                <MainFooter />
            </footer>
        </div>
    )
}
