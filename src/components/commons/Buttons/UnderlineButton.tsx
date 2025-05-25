import type { ButtonProps } from './Button';
import styles from './Button.module.scss';
import clsx from 'clsx';

export const U_Button = ({children, onClick, isActive}:ButtonProps) =>{
    return (
        <div className={clsx(styles.button2, isActive && styles.active)}>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}
