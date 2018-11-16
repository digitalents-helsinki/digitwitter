// @ts-check
import express from 'express'
import TweetModel from '../models/tweet.model'
import twitterClient from './twitter'

const app = express()

app.get('/', async (req, res, next) => {
  res.send({ message: 'hei' })
  twitterClient.get(
    'statuses/user_timeline',
    { screen_name: 'Yliaho' },
    (err, tweets) => {
      if (err) {
        throw err
      }

      console.log(tweets)
    }
  )
})

export default app
