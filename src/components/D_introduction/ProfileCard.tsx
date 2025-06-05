import styles from '@styles/D_introduction.module.scss';
import { type ProfileCardProps } from '@components/D_introduction';
import clsx from 'clsx';
import { useCopy } from '@hooks/useCopy';
import { Copy } from 'lucide-react';
import { useEffect } from 'react';


export const ProfileCard = ({data}: {data: ProfileCardProps}) => {

    const {isCopied,copy} = useCopy({text:data.Email});
    const {isCopied:isCopied2,copy:copy2} = useCopy({text:data.Phone});

    useEffect(()=>{
        if(isCopied) alert('email 복사 완료.');
        if(isCopied2) alert('phone 복사 완료.');    
    },[isCopied,isCopied2]);

    return (
        <div className={clsx(styles.profileCard)}>
            <div className={styles.top}>
                <div className={styles.image}>
                    <img src={data.Image} alt="profile" />
                </div>
                <div className={styles.info}>
                    <h3>{data.Name}</h3>
                    <p>{data.Position}</p>
                    <p>{data.Email} <Copy onClick={copy}/></p>
                    <p>{data.Phone} <Copy onClick={copy2}/></p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.item}>
                    <h3>학력</h3>
                    <p>{data.Education}</p>
                </div>
                <div className={styles.item}>
                    <h4>주요 경력</h4>
                    {data.Majorcareer.map((v,i)=>(
                        <li key={i}>
                            {v}
                            <br />
                        </li>
                    ))}
                </div>
                {/* <div className={styles.item}>
                    <h4>주요 실적</h4>
                    {data.Keyachievements.thesis?.map((v,i)=>(
                        <li key={i}>
                            {v}
                            <br />
                        </li>
                    ))}
                </div> */}
            </div>
        </div>
    )
}
