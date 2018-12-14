import { Context } from 'probot'
import { PREVIEW_HEADER } from './constants'

const query = `query ($owner: String!, $repo: String!) { 
  repository (owner: $owner, name: $repo) {
    pinnedIssues (first: 3) {
      totalCount
      nodes {
        issue {
          title
          number
          labels (first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
}`

export async function getPinnedIssues (context: Context) {
  const results = await context.github.query(query, context.repo(), {
    Accept: PREVIEW_HEADER
  })

  return results.repository.pinnedIssues.nodes
}
