/* eslint-disable no-undef */

/** Internal dependencies */
import getResult from './get_result'

const apiResponseOne = {
  verificationDocumentResult: {
    type: 'DriverLicenceResponse'
  },
  verificationRequestNumber: 15129,
  verificationResultCode: 'Y'
}

const apiResponseTwo = {
  verificationDocumentResult: {
    type: 'DriverLicenceResponse'
  },
  verificationRequestNumber: 17146,
  verificationResultCode: 'N'
}

const apiResponseThree = {
  verificationDocumentResult: {
    type: 'DriverLicenceResponse'
  },
  verificationRequestNumber: 16874,
  verificationResultCode: 'D'
}

const apiResponseFour = {
  verificationDocumentResult: {
    type: 'DriverLicenceResponse'
  },
  verificationRequestNumber: 68685,
  verificationResultCode: 'S'
}

test('getResult returns true', () => {
  expect(getResult(apiResponseOne)).toStrictEqual({ kycResult: true })
})

test('getResult returns false', () => {
  expect(getResult(apiResponseTwo)).toStrictEqual({ kycResult: false })
})

test('getResult returns document error', () => {
  expect(getResult(apiResponseThree)).toStrictEqual({
    code: 'D',
    message: 'Document Error'
  })
})

test('getResult returns server error', () => {
  expect(getResult(apiResponseFour)).toStrictEqual({
    code: 'S',
    message: 'Server Error'
  })
})
