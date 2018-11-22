import Twitter from 'twitter'
import { twitter } from '@/constants/'

const twitterClient = new Twitter({
  consumer_key: twitter.consumer_key,
  consumer_secret: twitter.consumer_secret,
  access_token_key: twitter.access_token_key,
  access_token_secret: twitter.access_token_secret
})

export default twitterClient
