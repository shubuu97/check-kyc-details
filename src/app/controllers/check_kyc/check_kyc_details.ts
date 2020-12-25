/** External Dependencies */
import dotenv from 'dotenv'
import axios, { AxiosResponse, AxiosError } from 'axios'

/** Internal Dependencies */
import { UserDetailsInterface } from '../../../types'

dotenv.config()

const CheckKYC = (userDetails: UserDetailsInterface): Promise<any> => {
  return new Promise((resolve, reject) => {
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
      resolve(data)
    }).catch((error: AxiosError) => {
      reject(error)
    })
  })
}

export default CheckKYC
