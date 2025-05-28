import styles from '@styles/D_introduction.module.scss';
import { type TextData } from './index';
interface IntroductionProps {
    data: TextData
    setActive: (active: number) => void
}

export const Introduction = ({data, setActive}: IntroductionProps) => {

    return (
        <div className={styles.introduction} id={data.id.toString()}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>{data.title}</h1>
                    <p>{data.slogan}</p>
                </div>
                <div className={styles.description}>
                    <div className={styles.description_text}>
                        {data.description.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <div className={styles.description_example}>
                        {data.example.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

