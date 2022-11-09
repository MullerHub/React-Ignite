import Head from 'next/head'
import React from 'react'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'

// Client-side
// Server-side Rendering (ex: comentários do post)
// Static Side Generation (ex: post do blog)

// GetServerSideProps: faz a chamada à API via SSR, para que seja visível aos
// motores de busca. Essa função é executada na camada do Next, e não no browser.
// export const getServerSideProps: GetServerSideProps = async() => {

// GetStaticProps: faz chamada à API via SSG (Static Side Generation), ou seja,
// o Next renderiza uma única vez a página e armazena o HTML estático.
// Da próxima vez que o cliente acessar a página, o Next busca o html armazenado.
// O único diferencial é a propriedade revalidate: quanto tempo em segundos
// esta página voltará a ser reconstruída.
// Só use quando o conteúdo for o mesmo para todos os clientes e não mudar
// com frequência.

interface IHomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig. news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>
            News about the <span>React</span> wordl.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // passar o API ID do preço do produto (ver no site stripe.com)

  const price = await stripe.prices.retrieve(
    'price_1M0qs3AOshFAsJOxMogVBKNj'
    //, {expand: ['product']}   //caso precise obter outros dados do produto
  )

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

// ERROR INVALID API KEY, ERRO NA CHAVE DA API DA STRIPE.
