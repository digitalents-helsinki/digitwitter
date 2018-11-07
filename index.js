require('dotenv-safe').config({
  path: './.env',
  sample: './.env.example'
})
const { writeFile } = require('fs')
const { promisify } = require('util')
const path = require('path')
const Twitter = require('twitter')
const {
  consumer_key,
  consumer_secret,
  access_token_secret,
  access_token_key
} = require('./config')

const writeFileAsync = promisify(writeFile)

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY
})

const params = {
  q: 'filter:links',
  geocode: '60.1663803,24.9234027,50mi'
}

client.get('search/tweets.json', params, async (err, res) => {
  if (err) {
    console.log(err)
    throw err
  }

  const sortedTweets = res.statuses
    .filter(tweet => tweet.retweet_count >= 8)
    .sort((a, b) => a.retweet_count - b.retweet_count)
    .reverse()
    .map(({ created_at, retweet_count, favorite_count, text }) => ({
      createdAt: created_at,
      retweetCount: retweet_count,
      favoriteCount: favorite_count,
      text
    }))

  await writeFileAsync(
    path.resolve(__dirname, 'data.json'),
    JSON.stringify(sortedTweets, null, 2),
    {
      encoding: 'utf8'
    }
  )
})

// RES DATA:
// created_at (UTC)
// retweet_count
// favorite_count
// entities (hashtags, mentions etc.)
// text
// user
//  location
//  screen_name (no @ symbol)
//  profile_image_url_https
//  verified
//  followers_count
