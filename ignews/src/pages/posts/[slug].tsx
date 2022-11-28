import { GetServerSideProps, NextApiRequest, PreviewData } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { createClient } from '../../services/prismic'

import styles from './post.module.css'

type IPost = {
  slug: string
  title: string
  content: string
  updated_at: string
}

export interface IPostProps {
  post: IPost
}

interface ServerSideProps extends GetServerSideProps {
  previewData: PreviewData
  req: NextApiRequest
  params: {
    slug: string
  }
}

export default function Post({ post }: IPostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updated_at}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}

export const getServerSideProps = async ({
  previewData,
  params,
  req
}: ServerSideProps) => {
  const session = await getSession({ req: req })

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const { slug } = params
  const client = createClient({ previewData })

  const response = await client.getByUID('publication', slug)

  const post = {
    slug: response.uid,
    title: response.data.title,
    content: RichText.asHtml(response.data.content),
    updated: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  }

  return {
    props: {
      post
    }
  }
}
