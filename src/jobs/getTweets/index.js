import Job from '@/Job'
import twitterClient from '@/config/twitter'
import TweetModel from '@/models/tweet.model'

import { readFileAsync } from '@/utils/'
import path from 'path'

const getTweets = async () => {
  const hashtagQueryArray = await readFileAsync(
    path.resolve(process.cwd(), 'data/query.json'),
    { encoding: 'utf8' }
  )

  for (let hashtagQuery of JSON.parse(hashtagQueryArray)) {
    const params = { q: hashtagQuery, tweet_mode: 'extended', count: 100 }
    twitterClient.get('search/tweets.json', params, (err, tweets) => {
      if (err) {
        throw err
      }

      for (var i = 0; i < tweets.statuses.length; i++) {
        var tweet = tweets.statuses[i]
        TweetModel.find(
          { query_hashtag: hashtagQuery, id: tweet.id },
          (err, hashtags) => {
            console.log(hashtags)
            if (hashtags.length == 0) {
              tweets = new TweetModel({
                text: tweet.full_text,
                user: tweet.user,
                id: tweet.id,
                hashtags: [],
                query_hashtag: hashtagQuery,
                retweet_count: tweet.retweet_count,
                favorite_count: tweet.favorite_count
              })
              if (tweets.retweet_count > 1) {
                tweets.save(err => {
                  if (err) console.error(err)
                  console.log('saved')
                })
              }
            }
          }
        )
      }
    })
  }
}

export default new Job(getTweets, {
  cronPattern: '* * * * *'
})
