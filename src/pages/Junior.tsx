import { MainFooter } from '@components/commons/Footers';
import { MainHeader } from '@components/commons/Headers';
import { Carousel } from '@components/Students';
import styles from '@styles/Junior.module.scss';


export const Junior = () => {

    return (
        <div className={styles.Junior}>
            <header>
                <MainHeader />
            </header>
        
            <div className={styles.container}>
                <Carousel />
            </div>

            <footer>
                <MainFooter />
            </footer>
        </div>
    );
};
