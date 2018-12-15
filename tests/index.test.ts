import nock from 'nock'
import { Probot } from 'probot'
import goodFirstPin from '../src'
// tslint:disable-next-line:no-var-requires
const payload = require('./fixtures/issues.labeled.json')

nock.disableNetConnect()

describe('good-first-pin', () => {
  let probot: Probot
  let event: any

  beforeEach(() => {
    probot = new Probot({ id: 123, cert: 'test' })

    // Load our app into probot
    const app = probot.load(goodFirstPin)
    app.app = () => 'test'

    event = { name: 'issues', payload }
  })

  it('pins a comment when an issue is labeled with a matching label', async () => {
    nock('https://api.github.com')
      .post('/graphql').reply(200, { data: { repository: { pinnedIssues: { nodes: [] } } } })
      .post('/graphql').reply(200, {
        data: { pinIssue: { issue: { title: payload.issue.title } } }
      })

    // Receive a webhook event
    await probot.receive(event)
    expect(nock.isDone()).toBe(true)
  })

  it('does nothing if the label added does not match', async () => {
    nock('https://api.github.com').post('/graphql').reply(200)

    // Receive a webhook event
    await probot.receive({
      name: 'issues',
      payload: {
        action: 'labeled',
        label: { name: 'nope' }
      }
    })

    // If this is false, it never made a GraphQL request
    expect(nock.isDone()).toBe(false)
    nock.cleanAll()
  })

  it('does nothing if there are already three pinned issues', async () => {
    nock('https://api.github.com')
      .post('/graphql').reply(200, { data: { repository: { pinnedIssues: { nodes: [1, 2, 3] } } } })

    // Receive a webhook event
    await probot.receive(event)

    // If this is false, it never made a GraphQL request
    expect(nock.isDone()).toBe(true)
  })
})
