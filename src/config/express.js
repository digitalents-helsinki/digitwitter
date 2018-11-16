// @ts-check
import express from 'express'
import TweetModel from '../models/tweet.model'

const app = express()

app.get('/', async (req, res, next) => {
  res.send({ message: 'hei' })
})

export default app
