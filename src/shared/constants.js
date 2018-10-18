import dotenv from 'dotenv'

dotenv.load()

const { PORT, API_LANDBOT_TOKEN } = process.env

const developDomain =  {
  port: PORT,
  get url() { return `http://localhost:${this.port}/` },
  get apiUrl() { return `${this.url}api/` }
}

const landBot = {
  headers: {
    timeout: 3000,
    contentType: 'application/json',
    Authorization: API_LANDBOT_TOKEN
  },
  API: {
    urlBase: 'https://api.landbot.io/v1/',
    get customers() { return `${this.urlBase}customers/`},
    get customer() { return `${this.urlBase}customers/:ID/` },
    get updateCustomer() { return `${this.urlBase}customers/:ID/fields/:FIELD/` }
  }
}

export { developDomain, landBot }