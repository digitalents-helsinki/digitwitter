import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
  res.send({ message: 'hello' })
})

export default app
