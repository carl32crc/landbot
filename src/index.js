import app from './server'
import { developDomain } from './shared/constants'

const { port } = developDomain

app.listen(port)
/* eslint-disable */
console.log(`Listening on PORT ${port}...`)