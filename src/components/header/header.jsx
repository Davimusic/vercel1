import clsx from 'clsx';
import styles from '../../../app/page.module.css'

export const Header = () =>{
    return(
        <header>
            <nav className={clsx(styles.espacioEquilatero, styles.color1, styles.header)}>
                <a href='/'>home</a>
                <a href='/events'>events</a>
                <a href='/about-us'>about us</a>
            </nav>
        </header>
    );
}