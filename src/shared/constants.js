
const developDomain =  {
  port: 3000,
  get url() { return `http://localhost:${this.port}/` },
  get apiUrl() { return `${this.url}api/` }
}

export { developDomain }