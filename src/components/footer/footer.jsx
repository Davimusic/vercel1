import styles from '../../../app/page.module.css'
import clsx from 'clsx';

export const Footer = () =>{
    return(
        <footer className={clsx(styles.footer, styles.center)}>
            <p>mi footer Davis XD</p>
        </footer>
    );
};