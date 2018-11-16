// @ts-check

export default class Job {
  constructor(jobFunction, opts) {
    if (!opts || !opts.cronPattern) {
      this.cronPattern = '* * * * *'
    } else {
      this.cronPattern = opts.cronPattern
    }

    this.jobFunction = jobFunction
  }

  init() {}

  run() {
    if (typeof this.jobFunction === 'function') {
      console.log('hei')
      this.jobFunction.call(this)
    }
  }
}
