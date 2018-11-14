import path from 'path'
import app from './config/express'
import { sendMessage, listen } from './config/slack'

app.listen(3000, () => {
  listen()
})
