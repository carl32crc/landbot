import axios from 'axios'
import { landbotAPI } from '../../../../../shared/constants'

const { headers, URL } = landbotAPI

export default function (req, res) {
  const { field, id, value } = req.body

  axios.put(URL.updateCustomer.replace(':ID', id).replace(':FIELD', field), { value }, { headers })
    .then(customer => res.status(200).json({ data: customer.data }))
    .catch(error => res.status(500).json({ data: error }))
}