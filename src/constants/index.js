import transformEnv from './utils/transformEnv'

export const slack = transformEnv('slack')

export const twitter = transformEnv('twitter')

export default {
  twitter,
  slack
}
