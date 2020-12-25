export interface UserDetailsInterface {
  birthDate: string,
  givenName: string,
  middleName?: string,
  familyName: string,
  licenceNumber: string,
  stateOfIssue: string,
  expiryDate?: string
}

export interface ValidationRulesInterface {
  required: boolean,
  type: string,
  maxLength?: number,
  oneOf?: string[],
  date?: boolean
}