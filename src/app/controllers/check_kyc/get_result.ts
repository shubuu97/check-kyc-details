import { CheckKYCAPIResponseInterface } from '../../../types'

/** Returns result according to verificationResultCode */
const getResult = (response: CheckKYCAPIResponseInterface): {} => {
  const { verificationResultCode } = response || {}
  let result = {}
  switch (verificationResultCode) {
    case 'Y': {
      result = {
        kycResult: true
      }
      break
    }
    case 'N': {
      result = {
        kycResult: false
      }
      break
    }
    case 'D': {
      result = {
        code: verificationResultCode,
        message: 'Document Error'
      }
      break
    }
    case 'S': {
      result = {
        code: verificationResultCode,
        message: 'Server Error'
      }
      break
    }
    default: {
      result = {
        message: 'Invalid Code'
      }
    }
  }
  return result
}

export default getResult
