import Image from 'next/image'
import styles from './page.module.css'
import { HomePage } from '@/src/components/home/home-page'
import { Header } from '@/src/components/header/header'
import { Footer } from '@/src/components/footer/footer'

let mirar = {}//este problema me salio en la 1hora

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json')
  console.log('XDXDXDXXX el propio');
  console.log(events_categories);
  mirar = events_categories
  return{
    props:{
      data: events_categories,
    },
  };
}

getServerSideProps()




export default async function Home() {
  console.log('entra');
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  await delay(500); // Espera 5 segundos

  console.log('ya paso');
  console.log(mirar);

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        
        <Header/>
        <HomePage mirar={mirar}/>
        <Footer/>
        
      </div>
    </main>
  )
}




