import { CronJob } from 'cron'
import Job from './Job'

export default class JobRunner {
  /**
   * @param {Array<*>} jobs
   */
  constructor(jobs) {
    this.jobs = jobs
  }

  start() {
    for (let job of this.jobs) {
      try {
        new CronJob(
          job.cronPattern,
          () => job.run(),
          null,
          true,
          'America/Los_Angeles'
        )
      } catch (err) {
        console.error('what haha')
        throw err
      }
    }
  }
}
