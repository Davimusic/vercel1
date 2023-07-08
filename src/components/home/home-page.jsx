import Image from "next/image"
import clsx from 'clsx';
import styles from '../../../app/page.module.css'

export const HomePage = ({mirar}) =>{
    return (
        <main>
            {mirar.map(ev => 
            <a key={ev.id} href={`../pages/events/${ev.id}`} className={clsx(styles.a, styles.block)}>
                <Image width={200} height={200} alt={ev.title} src={ev.image}/>
                <h2> {ev.title} </h2>
                <p> {ev.description} </p>
            </a>)}
        </main>
    )
}