/** Internal Dependencies */
import { statesOfIssue } from '../../utils/constants'

const UserSchema = {
  birthDate: {
    validationRules: {
      required: true,
      type: 'string',
      date: true,
    },
    errorMessage: 'Birth date is required and should be in YYYY-MM-DD format!',
  },
  givenName: {
    validationRules: {
      required: true,
      type: 'string',
      maxLength: 100,
    },
    errorMessage:
      "Given name is required and it's length should not exceed 100!",
  },
  middleName: {
    validationRules: {
      required: false,
      type: 'string',
      maxLength: 100,
    },
    errorMessage: 'Middle name length should not exceed 100!',
  },
  familyName: {
    validationRules: {
      required: true,
      type: 'string',
      maxLength: 100,
    },
    errorMessage:
      "Given name is required and it's length should not exceed 100!",
  },
  licenceNumber: {
    validationRules: {
      required: true,
      type: 'string',
    },
    errorMessage: 'License number is required and should be in string!',
  },
  stateOfIssue: {
    validationRules: {
      required: true,
      type: 'string',
      oneOf: statesOfIssue,
    },
    errorMessage: 'Incorrect state of issue!',
  },
  expiryDate: {
    validationRules: {
      required: false,
      type: 'string',
      date: true,
    },
    errorMessage: 'Expiry date should be in YYYY-MM-DD format!',
  },
}

export default UserSchema
