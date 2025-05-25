import styles from '@styles/D_introduction.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import type { TextData } from '.';

interface TextCardProps {
    List: TextData[];
    data?: TextData;
}

export const TextCard = ({List, data}: TextCardProps) => {

    const [active, setActive] = useState(0);
    useEffect(()=>{
    },[active]);

    return (
        <div className={styles.textCard}>
            <div className={styles.index}>
                {List.map((v)=>(    
                    <div key={v.id.toString()} 
                        className={clsx(styles.item, active === v.id && styles.active)}
                        onClick={()=>setActive(v.id)}
                    >
                        <h3>{v.title}</h3>
                    </div>
                ))}
            </div>
            <div className={styles.slide}>
                {List.map((v)=>(
                    <div key={v.id.toString()} className={styles.container}>
                        <div className={styles.title}>
                            <h1>{v?.title}</h1>
                        </div>
                        <div className={styles.slogan}>
                            <h2>{v?.slogan}</h2>
                        </div>
                        <div className={styles.content}>
                            <p>
                                {v?.description}
                            </p>
                            {v?.example && (
                                <p>{v?.example}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
