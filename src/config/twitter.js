import Twitter from 'twitter'
import { twitter } from '@/constants/'

const twitterClient = new Twitter(twitter)

export default twitterClient
