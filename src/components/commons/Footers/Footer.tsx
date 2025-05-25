import styles from './Footer.module.scss'
import { GithubIcon } from 'lucide-react';
import clsx from 'clsx'

export const MainFooter = () => {
    return (
        <div className={clsx(styles.footerMain)}>
            <div className={clsx(styles.footerMain, styles.item,styles.left)}>
                <GithubIcon/>
                <a 
                    href='https://www.instagram.com/dgu_art_center/' 
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    github
                </a>
            </div>
            <div className={clsx(styles.footerMain, styles.item,styles.right)}>
                <p>인공지능SW융합과 <span>김고은</span></p>
            </div>
        </div>
    )
}
