import { ExtendableError } from '../parents/extendable_error'

export class EmailNotVerifiedError extends ExtendableError {
  constructor () {
    super('EmailNotVerifiedError')
    this.errorType = 'Email not verified'
  }
}
