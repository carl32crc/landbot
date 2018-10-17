import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// express.static STATIC route was only working for some requests, but not others.
app.use('/', express.static('dist'))

/* ROUTES */
import api from './router/api'

app.use('/api', api)

export default app
