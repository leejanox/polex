import styles from './Header.module.scss'
import clsx from 'clsx'
import { Logo } from '@pmndrs/branding'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export const MainHeader = () => {

    const [ open , setOpen ] = useState<boolean>(false);
    const menu = ['전시소개' , '학과소개' , '1학년' , '2학년', '하이테크']

    return (
        <div className={clsx(styles.MainHeader)}>
            <div className={clsx(styles.MainHeader,styles.item,styles.left)}>
                <Link to='/'>
                    <Logo/>
                </Link>
            </div>
            <div className={clsx(styles.MainHeader,styles.item,styles.right)}
                onClick={(e) => { e.preventDefault(); setOpen((prev) => !prev);}}
            >
                <p>MENU</p>
                <Menu/>
            </div>
            {open && (
                <div className={styles.modal} onClick={(e) => { e.stopPropagation(); setOpen((prev) => !prev);}}>
                    {menu.map((v,i)=>(
                        <li key={i}><Link to={`/${v}`}>{v}</Link></li>
                    ))}
                </div>
            )}
        </div>
    )
}
