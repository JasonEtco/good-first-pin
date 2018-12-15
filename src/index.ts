import { Application } from 'probot'
import { getPinnedIssues } from './get-pinned-issues'
import { pinIssue } from './pin-issue'

const GOOD_FIRST_REGEX = /^good\sfirst\sissue$/i

export = (app: Application) => {
  app.on('issues.labeled', async (context) => {
    console.log(context.payload.label.name)
    // Only act on GFI labels
    if (!GOOD_FIRST_REGEX.test(context.payload.label.name)) return

    const pinnedIssues = await getPinnedIssues(context)

    // Not full! Time to pin the issue.
    if (pinnedIssues.length < 3) {
      return pinIssue(context, context.payload.issue.node_id)
    }
  })
}
