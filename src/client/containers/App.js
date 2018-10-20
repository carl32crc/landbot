import React, { Component } from 'react'

import ContentTable from './../components/ContentTable'
import HeaderTable from './../components/HeaderTable'
import Modal from './../components/Modal'
import Spinner from './../components/Spinner'

import { getCustomers, getCustomer } from './../services/customers'

class App extends Component {

  state = {
    customers: [],
    customer: {},
    spinner: true,
    open: false,
    modalSpinner: false
  }

  componentWillMount() {
    this.customersList()
  }

  openModal = (id) => {
    this.setState({open: true, modalSpinner: true})
    this.infoCustomer(id)
  }

  closeModal = () => {
    this.setState({open: false})
  } 

  customersList() {
    getCustomers().then(customers => {
      Array.isArray(customers.data)  ?
        this.setState({customers: customers.data, spinner: false})
        : this.setState({customers: customers.data, spinner: false})
    })
  }

  infoCustomer(id) {
    getCustomer(id).then(customer => {
      this.setState({customer: customer.data, modalSpinner: !this.state.modalSpinner})
    })
  }

  render() {
    const { name, email, country, avatar } =this.state.customer
    return (
      <div className='app'>
        {this.state.spinner ?
          <Spinner visible /> :
          [<HeaderTable key={1} customers={this.state.customers} >
            {this.state.customers.map(customer => {
              return <ContentTable 
                email={customer.email} 
                id={customer.id}
                key={customer.id}  
                name={customer.name}
                openModal={this.openModal}
              />
            })} 
          </HeaderTable>,
          <Modal closeModal={this.closeModal} key={2} open={this.state.open} title={`Customer ${name}`}>
            {this.state.modalSpinner ?
              <Spinner visible /> :
              [<img key={1} src={avatar} />,
                <div key={2} >
                  <span>Country:</span>
                  {country}
                </div>,
                <div key={3} >
                  <span>Email:</span>
                  {email}
                </div>]
            }
          </Modal>]
        }   
      </div>
    )
  }
}

export default App