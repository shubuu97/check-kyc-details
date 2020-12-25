/* eslint-disable no-underscore-dangle */

/** External Dependencies */
import { isEmpty, get } from 'lodash'

/** Internal Dependencies */
import { UserDetailsInterface, ValidateUserDetailsInterface } from '../types'
import UserSchema from '../app/schema/user'
import validate from './validate'

const validateUserDetails = (userDetails: UserDetailsInterface): ValidateUserDetailsInterface => {
  let result: ValidateUserDetailsInterface = {
    isValid: true,
    errorMessages: [],
  }

  if (isEmpty(userDetails)) {
    result = {
      isValid: false,
      errorMessages: ['User details can not be empty!'],
    }
    return result
  }

  const userProperties = Object.keys(UserSchema)

  userProperties.forEach((userProperty) => {
    const { validationRules, errorMessage } = UserSchema[userProperty]

    const isRequired = get(validationRules, 'required', false)
    const errorMessages = get(result, 'errorMessages')

    const doesPropertyExist = userProperty in userDetails

    if (isRequired && !doesPropertyExist) {
      result = {
        isValid: false,
        errorMessages: [...errorMessages, `${userProperty} is Required!`],
      }
    } else if (doesPropertyExist) {
      const value = userDetails[userProperty]
      const isPropertyValid = validate(value, validationRules)

      if (!isPropertyValid) {
        result = {
          isValid: false,
          errorMessages: [...errorMessages, errorMessage],
        }
      }
    }
  })

  return result
}

export default validateUserDetails
