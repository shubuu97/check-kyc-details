/** Internal Dependencies */
import { dateRegex } from './constants'
import { ValidationRulesInterface } from '../types'

export const isValidDate = (dateString: string) : boolean => {
  if (typeof dateString !== 'string') return false

  if (!dateString.match(dateRegex)) return false

  const date = new Date(dateString)
  const noOfMilliseconds = date.getTime()

  // NaN value or Invalid date
  if (!noOfMilliseconds && noOfMilliseconds !== 0) return false

  return date.toISOString().slice(0, 10) === dateString
}

export const isNotEmpty = (value: string) : boolean => value.trim().length > 0

const validate = (value: string, rules: ValidationRulesInterface) : boolean => {
  let isValid = true

  const properties = Object.keys(rules)

  properties.forEach((rule) => {
    const ruleValue = rules[rule]

    switch (rule) {
      case 'required':
        {
          const isRequired = ruleValue

          if (isRequired) {
            isValid = isValid && isNotEmpty(value)
          }
        }
        break
      case 'type':
        {
          const expectedType = ruleValue
          // eslint-disable-next-line valid-typeof
          isValid = isValid && typeof value === expectedType
        }

        break
      case 'maxLength':
        {
          const maxLength = ruleValue

          if (typeof value !== 'string') {
            isValid = false
          } else {
            const isMaxLength = value.length <= maxLength
            isValid = isValid && isMaxLength
          }
        }

        break
      case 'date':
        isValid = isValid && isValidDate(value)

        break
      case 'oneOf':
        if (!Array.isArray(ruleValue)) {
          isValid = false
        } else {
          isValid = isValid && ruleValue.indexOf(value) !== -1
        }

        break
      default:
        isValid = true
    }
  })
  return isValid
}

export default validate
