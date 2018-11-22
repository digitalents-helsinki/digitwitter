// @ts-check
import express from 'express'
import TweetModel from '../models/tweet.model'
import twitterClient from './twitter'

const app = express()

app.get('/', async (req, res, next) => {
  TweetModel.find((err, people) => {
    if (err) return res.status(500).send(err)

    // send the list of all people in database with name of "John James" and age of 36
    // Very possible this will be an array with just one Person object in it.
    return res.status(200).send(people)
  })
})

export default app
