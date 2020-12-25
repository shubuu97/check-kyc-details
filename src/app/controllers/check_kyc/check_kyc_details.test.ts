/* eslint-disable no-undef */

/** Internal dependencies */
import CheckKYC from './check_kyc_details'

const userDetails = {
  birthDate: '1997-05-21',
  givenName: 'Daniel',
  middleName: 'May',
  familyName: 'Berry',
  licenceNumber: '57857543',
  stateOfIssue: 'SA',
  expiryDate: '2022-10-22',
}

test('Check KYC details', () => {
  CheckKYC(userDetails)
    .then((response) => {
      expect(response).toStrictEqual({ code: 'S', message: 'Server Error' })
    })
    .catch((error) => {
    })
})
