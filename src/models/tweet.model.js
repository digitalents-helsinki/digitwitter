import mongoose from 'mongoose'

const TweetSchema = new mongoose.Schema({
  hashtags: {
    type: Array,
    required: true
  },
  query_hashtag: {
    type: String
  },
  text: String,
  retweet_count: Number,
  favorite_count: Number,
  user: Object,
  id: Number
})

export default mongoose.model('Tweet', TweetSchema)
