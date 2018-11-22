// @ts-check
import { slack } from '../constants/'
import { WebClient, RTMClient } from '@slack/client'
import TweetModel from '@/models/tweet.model'

const token = slack.legacy_token

const web = new WebClient(token)
const rtm = new RTMClient(token)
rtm.start()

const channel = 'G935ENCTS'

export const sendMessage = () => {
  web.chat
    .postMessage({ channel, text: 'hello from the botland' })
    .then(res => {
      console.log('message sent', res)
    })
    .catch(err => {
      throw err
    })
}
TweetModel.findOne({ query_hashtag: 'slush18' }, function(err, person) {
  if (err) return handleError(err)
  web.chat
    .postMessage({ channel, text: person.query_hashtag })
    .then(res => {
      //`res` contains information about the posted message
      console.log('Message sent: ', res.ts)
    })
    .catch(console.error)
  web.chat
    .postMessage({ channel, text: person.text })
    .then(res => {
      //`res` contains information about the posted message
      console.log('Message sent: ', res.ts)
    })
    .catch(console.error)
})

export const listen = () => {
  rtm.on('message', e => {
    console.log(e)
  })
}
