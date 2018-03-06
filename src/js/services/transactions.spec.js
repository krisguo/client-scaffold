import { parseTransaction } from '../parsers/tx.parser'
import {
  withdawRecord,
  transferRecord,
  issuanceRecord
} from '../../../test/unit/mock_data/records'

import { WithdrawalRecord } from '../records/withdraw.record'
import { TransferRecord } from '../records/transfer.record'
import { IssuanceRecord } from '../records/issuance.record'

import { UnknownTransactionError } from '../errors/modules/unknown_transaction_error'

describe('correctly parses transactions', () => {
  it ('should correctly define transfer entity', () => {
     expect(parseTransaction(transferRecord).constructor).to.equal(TransferRecord)
  })

  it ('should correctly define issuance entity', () => {
     expect(parseTransaction(issuanceRecord).constructor).to.equal(IssuanceRecord)
  })

  it ('should throw unknown tx error', (done) => {
    const unknownTx = { foo: 'foo', bar: 'bar' }
    try {
      parseTransaction(unknownTx)
    } catch (err) {
      expect(err.constructor).to.equal(UnknownTransactionError)
      done()
    }
  })
})