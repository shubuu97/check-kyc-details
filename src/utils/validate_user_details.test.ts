/* eslint-disable no-undef */
import validateKYCDetails from './validate_user_details'

const UserDetailsOne = {
  birthDate: '1985-02-08',
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
}

const UserDetailsTwo = {
  birthDate: '1985-02-08',
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
}

test('Validate KYC details with correct data', () => {
  expect(validateKYCDetails(UserDetailsOne)).toStrictEqual({ isValid: true, errorMessages: [] })
})

test('Validate KYC details with incorrect data', () => {
  expect(validateKYCDetails(UserDetailsTwo)).toStrictEqual({ isValid: false, errorMessages: ['Incorrect state of issue!'] })
})
