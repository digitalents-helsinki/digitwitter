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
  id: {
    type: Number,
    unique: true
  }})

export default mongoose.model('Tweet', TweetSchema)
