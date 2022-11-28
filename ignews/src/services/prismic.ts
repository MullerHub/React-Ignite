import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { NextApiRequest, PreviewData } from 'next'
import sm from '../../sm.json'

interface IPrismicContext {
  req?: NextApiRequest
  previewData: PreviewData
}

interface IPrismicResolver {
  [key: string]: any
}

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export function linkResolver(doc: IPrismicResolver) {
  switch (doc.type) {
    case 'posts':
      return `/${doc.uid}`
    default:
      return null
  }
}

export function createClient(config: IPrismicContext) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}
