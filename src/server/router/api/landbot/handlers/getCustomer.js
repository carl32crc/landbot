import axios from 'axios'
import { landBot } from '../../../../../shared/constants'

const { headers, API } = landBot

export default function (req, res) {
  const { id } = req.params

  axios.get(API.customer.replace(':ID', id), { headers })
    .then(customer => res.status(200).json({data: customer.data}))
    .catch(error => res.status(error.response.status).json({status: error.response.status, error: error.response.data.detail}))
}