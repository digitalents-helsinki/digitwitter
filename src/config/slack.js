// @ts-check
import { slack } from '../constants/'
import { WebClient, RTMClient } from '@slack/client'
import TweetModel from '@/models/tweet.model'
import { readFileAsync } from '@/utils/'
import { _ } from 'underscore'
import path from 'path'

const token = slack.legacy_token

const web = new WebClient(token)
const rtm = new RTMClient(token)
rtm.start()

const channel = 'CEA6SMCF7'

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
const postsTweets = async () => {
  const hashtagQueryArray = await readFileAsync(
    path.resolve(process.cwd(), 'data/query.json'),
    { encoding: 'utf8' }
  )
  for (let hashtagQuery of JSON.parse(hashtagQueryArray)) {
    //TweetModel.findOne({ query_hashtag: hashtagQuery }, function(err, person) {
    //if (err) return handleError(err)
    //web.chat
    //.postMessage({ channel, text: 'https://twitter.com/search?q=' +person.query_hashtag })
    //.then(res => {
    //`res` contains information about the posted message
    //    console.log('Message sent: ', res.ts)
    //})
    //.catch(console.error)
    //})
    TweetModel.find({
      query_hashtag: hashtagQuery,
      retweet_count: { $gt: 30, $lt: 66 }
    }).exec(callback)
  }
}

const callback = (err, data) => {
  var list = []
  for (let hashtags of data) {
    if (typeof list[hashtags] === 'undefined') {
      list.push({ hashtags: hashtags.query_hashtag })
    }
  }
  var values = _.values(_.countBy(list))
  var newlist = list.filter((e, i, a) => a.indexOf(e) === i)
  for (var i = 0; i < newlist.length; i++) {
    newlist[i].count = values[i]
  }
  var thelist = newlist.filter(item => {
    return item.count !== undefined
  })
  for (let array of thelist) {
    web.chat
      .postMessage({
        channel,
        text:
          'https://twitter.com/search?q=' + array.hashtags + ' ' + array.count
      })
      .then(res => {})
      .catch(console.error)
  }
}

export const listen = () => {
  rtm.on('message', e => {
    console.log(e)
  })
  postsTweets()
}
