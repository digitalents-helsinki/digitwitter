import Job from '@/Job'
import twitterClient from '@/config/twitter'
import { readFileAsync } from '@/utils/'
import path from 'path'

const getTweets = async () => {
  const hashtagQueryArray = await readFileAsync(
    path.resolve(process.cwd(), 'data/query.json'),
    { encoding: 'utf8' }
  )

  for (let hashtagQuery of JSON.parse(hashtagQueryArray)) {
    const params = { q: hashtagQuery }
    twitterClient.get('search/tweets.json', params, (err, tweets) => {
      if (err) {
        throw err
      }

      console.log(tweets)
    })
  }
}

export default new Job(getTweets, {
  cronPattern: '* * * * *'
})
