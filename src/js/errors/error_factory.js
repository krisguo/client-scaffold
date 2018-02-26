import { NotFoundError } from './modules/not_found_error'
import { UnknownTransactionError } from './modules/unknown_transaction_error'
import { ServerError } from './modules/server_error'
import { WrongPasswordError } from './modules/wrong_password_error'
import { OtpError, OTPCancelledError, PasswordFactorError, TFAWrongCodeError } from './modules/tfa_errors'
import { ConflictError } from './modules/conflict_error'
import { ExtendableError } from './parents/extendable_error'
import { EmailNotVerifiedError } from './modules/email_not_verified_error'
import { UnknownReviewableRequestError } from './modules/unknown_reviewable_request_error'
import { TransactionError } from './modules/transaction_error'
import { DisposableEmailError, InvalidEmailError, RoleEmailError } from './modules/email_errors'
import { ExpiredSignatureError } from './modules/expired_signature_error'

export const errors = {
  ConflictError,
  NotFoundError,
  UnknownTransactionError,
  ServerError,
  WrongPasswordError,
  OtpError,
  OTPCancelledError,
  PasswordFactorError,
  TFAWrongCodeError,
  EmailNotVerifiedError,
  UnknownReviewableRequestError,
  TransactionError,
  DisposableEmailError,
  InvalidEmailError,
  RoleEmailError,
  ExpiredSignatureError
}

export const errorTypes = setErrorTypes()

export class ErrorFactory {
  static throwError (errorType, params) {
    switch (errorType) {
      case errorTypes.NotFoundError:
        throw new NotFoundError(params)
      case errorTypes.ServerError:
        throw new ServerError(params)
      case errorTypes.UnknownTransactionError:
        throw new UnknownTransactionError(params)
      case errorTypes.WrongPasswordError:
        throw new WrongPasswordError(params)
      case errorTypes.OtpError:
        throw new OtpError(params)
      case errorTypes.OTPCancelledError:
        throw new OTPCancelledError(params)
      case errorTypes.PasswordFactorError:
        throw new PasswordFactorError(params)
      case errorTypes.TFAWrongCodeError:
        throw new TFAWrongCodeError(params)
      case errorTypes.UnknownReviewableRequestError:
        throw new UnknownReviewableRequestError(params)
      case errorTypes.TransactionError:
        throw new TransactionError(params)
      case errorTypes.DisposableEmailError:
        throw new DisposableEmailError()
      case errorTypes.InvalidEmailError:
        throw new InvalidEmailError()
      case errorTypes.RoleEmailError:
        throw new RoleEmailError()
      default:
        throw new ExtendableError(params)
    }
  }

  static getNotFoundError () {
    return new NotFoundError()
  }

  static getServerError () {
    return new ServerError(...arguments)
  }

  static getConflictError () {
    return new ConflictError(...arguments)
  }

  static getUnknownTransactionError () {
    return new UnknownTransactionError(...arguments)
  }

  static getWrongPasswordError () {
    return new WrongPasswordError(...arguments)
  }

  static getOtpError () {
    return new OtpError(...arguments)
  }

  static getOTPCancelledError () {
    return new OTPCancelledError(...arguments)
  }

  static getPasswordFactorError () {
    return new PasswordFactorError(...arguments)
  }

  static getTFAWrongCodeError () {
    return new TFAWrongCodeError(...arguments)
  }

  static getEmailNotVerifiedError () {
    return new EmailNotVerifiedError(...arguments)
  }

  static getDefaultError () {
    return new ExtendableError(...arguments)
  }

  static getUnknownReviewableRequestError () {
    return new UnknownReviewableRequestError(...arguments)
  }

  static getTransactionError () {
    return new TransactionError(...arguments)
  }

  static getDisposableEmailError () {
    return new DisposableEmailError(...arguments)
  }

  static getInvalidEmailError () {
    return new InvalidEmailError(...arguments)
  }

  static getRoleEmailError () {
    return new RoleEmailError(...arguments)
  }

  static getExpiredSignatureError () {
    return new ExpiredSignatureError(...arguments)
  }
}

function setErrorTypes () {
  let errorTypes = {}
  Object.keys(errors).forEach(key => { errorTypes[key] = key })
  return errorTypes
}
