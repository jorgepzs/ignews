import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscibeButton'
import { stripe } from '../Services/stripe'
import styles from './home.module.scss'


interface HomeProps{
    product:{
        priceId:string;
        amount:number
    }
}

export default function Home({product}:HomeProps) {
    return (
        <>
        <Head>
            <title>Home | ig.news</title>
        </Head>
        <main className={styles.contentContainer}>
            <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>
            <p>
               Get access to all the publications <br />
               <span>For {product.amount} month</span>
               
            </p>
            <SubscribeButton priceId={product.priceId} />
            </section>
            <img src="/images/avatar.svg" alt="girn Coding" />
        </main>
      
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async() => {
    const price = await stripe.prices.retrieve('price_1LKvTJLeQVA8jdRLwYGbM7Gf',{
    })

    const product = 
    {priceId: price.id,
     amount: new Intl.NumberFormat('en-Us', {
         style:'currency',
         currency:'USD',
     }).format(price.unit_amount/100)
    } 


    return{
        props:{
            product
    
        }   
    }
}