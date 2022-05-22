import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product:{
    priceId: string;
    amount: number;
  }
}


//é executado na camada do next e não no browser
export default function Home({product}: HomeProps) {
  return (//coloquei o fragment pois no jsx não posso ter um elemento abaixo do outro sem ter um elemento em volta deles
    <> 
    <Head>
     <title>Home | ig.news</title>
   </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome!</span>
        <h1>News about <br /> the <span>React</span> world. </h1>
        <p>Get access to all the publications <br />
        <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceID={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />

    </main>
   </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1KyOxjGHm0VTgcoDGiX6go3r')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount/100), //salvar em centavos no banco de dados(mais fácil de manipular)
  };
  return {
    props:{
      product,
    },
    revalidate: 60*60*24, //24hours-quanto tempo em segundos quero que a página se mantenha
    //ser sem revalidada
  }
}
