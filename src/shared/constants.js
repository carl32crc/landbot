
const developDomain =  {
  port: 3000,
  get url() { return `http://localhost:${this.port}/` },
  get apiUrl() { return `${this.url}api/` }
}

const landbotAPI = {
  headers: {
    contentType: 'application/json',
    Authorization: 'Token 7be4b8a61dcb1715018c1f26aba5129b94af563b'
  },
  URL: {
    getCustomers: 'https://api.landbot.io/v1/customers/',
    getCustumer: 'https://api.landbot.io/v1/customers/:ID/',
    updateCustomer: 'https://api.landbot.io/v1/customers/:ID/fields/:FIELD/',
  }
}

export { developDomain, landbotAPI }