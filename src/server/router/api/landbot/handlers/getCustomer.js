import axios from 'axios'
import { landbotAPI } from '../../../../../shared/constants'

const { headers, URL } = landbotAPI

export default function (req, res) {
  const { id } = req.params

  axios.get(URL.getCustumer.replace(':ID', id), { headers })
    .then(customers => res.status(200).json({data: customers.data}))
    .catch(error => res.status(500).json({data: error}))
}