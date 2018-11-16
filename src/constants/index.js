import transformEnvEntries from './utils/transformEnvEntries'

export const slack = transformEnvEntries('slack')
export const twitter = transformEnvEntries('twitter')

export default {
  twitter,
  slack
}
