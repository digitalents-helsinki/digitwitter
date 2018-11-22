import transformEnvEntries from './utils/transformEnvEntries'

export const slack = transformEnvEntries('slack')
export const twitter = transformEnvEntries('twitter')
export const mongo = transformEnvEntries('mongo')

export default {
  twitter,
  slack,
  mongo
}
