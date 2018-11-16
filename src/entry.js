import path from 'path'
import app from './config/express'
import { initDb } from './config/mongoose'
import { listen } from './config/slack'

const start = async () => {
  try {
    await initDb()

    app.listen(3000, () => {
      listen()
    })
  } catch (err) {
    console.error(err)
  }
}

start()
