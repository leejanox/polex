import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
    children?:React.ReactNode;
    onClick?:()=>void;
    isActive?:boolean;
}

export const Button = ({children, onClick, isActive}:ButtonProps) => {
    return (
        <div className={clsx(styles.button1, isActive && styles.active)}>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}