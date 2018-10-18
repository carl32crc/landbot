import axios from 'axios'
import { landbotAPI } from '../../../../../shared/constants'

const { headers, URL } = landbotAPI

export default function (req, res) {
  axios.get(URL.getCustomers, { headers })
    .then(customers => res.status(200).json({data: customers.data}))
    .catch(error => res.status(500).json({data: error}))
}