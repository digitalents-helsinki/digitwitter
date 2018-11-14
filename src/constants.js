import path from 'path'

require('dotenv-safe').config({
  path: path.resolve(process.cwd(), '.env'),
  sample: path.resolve(process.cwd(), '.env.example')
})

export const slack = {
  legacy_token: process.env.SLACK_LEGACY_TOKEN,
  app_id: process.env.SLACK_APP_ID,
  client_id: process.env.SLACK_CLIENT_ID,
  client_secret: process.env.SLACK_CLIENT_SECRET,
  signing_secret: process.env.SLACK_SIGNING_SECRET,
  verification_token: process.env.SLACK_VERIFICATION_TOKEN
}

export const twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

export default {
  twitter,
  slack
}
