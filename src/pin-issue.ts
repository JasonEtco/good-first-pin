import { Context } from 'probot'
import { PREVIEW_HEADER } from './constants'

const mutation = `mutation ($input: PinIssueInput!) {
  pinIssue(input: $input) {
    issue {
      title
    }
  }
}`

export async function pinIssue (context: Context, issueId: string) {
  return context.github.query(mutation, { input: { issueId, clientMutationId: 'good-first-pin' } }, {
    Accept: PREVIEW_HEADER
  })
}
