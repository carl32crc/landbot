import axios from 'axios'
import { domain } from '../../shared/domain'
import { handlerError } from '../../shared/utils/handlerError'

const getCustomers = () => {
  return axios.get(`${domain.apiUrl}getCustomers`).then(response => {
    return handlerError(response)
  })
}

const getCustomer = (id) => {
  return axios.get(`${domain.apiUrl}getCustomer?id=${id}`).then(response => {
    return handlerError(response)
  })
}

export { getCustomers, getCustomer }