import styles from '@styles/D_introduction.module.scss';
import { type ProfileCardProps } from '@components/D_introduction';
import clsx from 'clsx';


export const ProfileCard = ({data}: {data: ProfileCardProps}) => {
    return (
        <div className={clsx(styles.profileCard)}>
            <div className={styles.top}>
                <div className={styles.image}>
                    <img src={data.Image} alt="profile" />
                </div>
                <div className={styles.info}>
                    <h3>{data.Name}</h3>
                    <p>{data.Position}</p>
                    <p>{data.Email}</p>
                    <p>{data.Phone}</p>
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
