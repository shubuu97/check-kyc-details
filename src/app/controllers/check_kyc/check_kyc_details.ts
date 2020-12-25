/** External Dependencies */
import dotenv from 'dotenv'
import axios, { AxiosResponse, AxiosError } from 'axios'

/** Internal Dependencies */
import getResult from './get_result'
import validateKYCDetails from '../../../utils/validate_user_details'
import { UserDetailsInterface } from '../../../types'

dotenv.config()

const CheckKYC = (userDetails: UserDetailsInterface): Promise<any> => {
  const { isValid, errorMessages } = validateKYCDetails(userDetails)

  return new Promise((resolve, reject) => {
    if (!isValid) {
      reject(errorMessages)
    }
    axios({
      method: 'POST',
      baseURL: process.env.BASE_URL,
      url: '/driverlicence',
      data: { ...userDetails },
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`,
        'content-type': 'application/json',
      },
    }).then((response: AxiosResponse) => {
      const { status, data } = response || {}
      if (status !== 200) {
        throw new Error('Something went wrong!')
      }
      const result = getResult(data)
      resolve(result)
    }).catch((error: AxiosError) => {
      reject(error)
    })
  })
}

export default CheckKYC
