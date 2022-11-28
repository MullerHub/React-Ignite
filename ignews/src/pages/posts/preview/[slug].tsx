import { GetStaticPaths, GetStaticProps, PreviewData } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

import { RichText } from 'prismic-dom'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { createClient } from '../../../services/prismic'
import styles from '../post.module.css'

type IPost = {
  slug: string
  title: string
  content: string
  updated_at: string
}

export interface IPostPreviewProps {
  post: IPost
}

interface StaticProps extends GetStaticProps {
  previewData: PreviewData
  params: {
    slug: string
  }
}

export default function PostPreview({ post }: IPostPreviewProps) {
  const { data: session } = useSession()
  console.log(session)
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      //parece ser erro de tipagem
      router.push(`/posts/${post.slug}`)
    }
  }, [post.slug, router, session])

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
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a href="">Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPath: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ previwData, params }: StaticProps) => {
  const { slug } = params
  const client = createClient({ previwData })

  const response = await client.getByUID('publication', slug)
  const post = {
    slug: response.uid,
    title: response.data.title,
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
    },
    redirect: 60 * 30 // 30 minutes
  }
}
