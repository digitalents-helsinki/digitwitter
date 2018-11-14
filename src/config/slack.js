// @ts-check
import { slack } from '../constants'
import { WebClient, RTMClient } from '@slack/client'

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

export const listen = () => {
  rtm.on('message', e => {
    console.log(e)
  })
}
