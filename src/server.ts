/* eslint-disable no-console */

/** Internal Dependencies */
import CheckKYCDetails from './app/controllers/check_kyc/check_kyc_details'
import UserDetails from './user_details'

CheckKYCDetails(UserDetails)
  .then((response) => {
    console.log('KYC Result:-', response)
  })
  .catch((error) => {
    console.log('KYC Error:-', error)
  })
