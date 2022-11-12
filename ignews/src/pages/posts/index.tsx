import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>11 de novembro de 2022 </time>
            <strong> Criado por Mullerhub</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              reprehenderit sapiente? Quas veritatis consectetur id quos libero
              eum, est sed, illo autem, architecto quia quisquam deleniti velit.
              Iusto, eveniet repudiandae?
            </p>
          </a>

          <a href="#">
            <time>11 de novembro de 2022 </time>
            <strong> Criado por Mullerhub</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              reprehenderit sapiente? Quas veritatis consectetur id quos libero
              eum, est sed, illo autem, architecto quia quisquam deleniti velit.
              Iusto, eveniet repudiandae?
            </p>
          </a>

          <a href="#">
            <time>11 de novembro de 2022 </time>
            <strong> Criado por Mullerhub</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              reprehenderit sapiente? Quas veritatis consectetur id quos libero
              eum, est sed, illo autem, architecto quia quisquam deleniti velit.
              Iusto, eveniet repudiandae?
            </p>
          </a>

          <a href="#">
            <time>11 de novembro de 2022 </time>
            <strong> Criado por Mullerhub</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              reprehenderit sapiente? Quas veritatis consectetur id quos libero
              eum, est sed, illo autem, architecto quia quisquam deleniti velit.
              Iusto, eveniet repudiandae?
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
