import path from 'path'
import app from './config/express'
import { initDb } from './config/mongoose'
import { listen } from './config/slack'
import getTweets from './jobs/getTweets/'
import JobRunner from './JobRunner'
import Job from './Job'

const start = async () => {
  try {
    await initDb()

    app.listen(3000, () => {
      listen()

      const jobs = new JobRunner([getTweets])

      jobs.start()
    })
  } catch (err) {
    console.error(err)
  }
}

start()
