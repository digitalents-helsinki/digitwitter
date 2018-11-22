import path from 'path'

require('dotenv-safe').config({
  path: path.resolve(process.cwd(), '.env'),
  sample: path.resolve(process.cwd(), '.env.example')
})

const envKeyValueArr = Object.entries(process.env)

/**
 * @param {string} namespace the env prefix to filter
 * @param {boolean} appendUnderscore whether or not the filter query automatically appends underscore (_)
 */
const transformEnvEntries = (namespace, appendUnderscore = true) => {
  if (!namespace || typeof namespace !== 'string' || namespace.length <= 0) {
    throw new Error(`namespace can not be empty or non-string.`)
  }

  const q = appendUnderscore
    ? `${namespace.toUpperCase()}_`
    : namespace.toUpperCase()

  const filterQuery = envKeyValueArr.filter(([key]) => key.startsWith(q))

  if (filterQuery.length > 0) {
    return filterQuery.reduce(
      (result, [key, value]) => ({
        ...result,
        [key.substring(q.length).toLowerCase()]: value
      }),
      {}
    )
  } else {
    throw new Error(`no envs found with a prefix of '${q}'`)
  }
}

export default transformEnvEntries
