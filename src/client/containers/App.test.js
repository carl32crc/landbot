import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

/* eslint-disable */
describe('App component', () => {
  
  it('it should start correct state', () => {
    const wrapper = shallow(<App />)
    const openModal = wrapper.state().open
    const customers = wrapper.state().customers
    const customer = wrapper.state().customer
    const updateCustomer = wrapper.state().updateCustomer
    const spinner = wrapper.state().spinner
    const modalSpinner = wrapper.state().modalSpinner
    const alertState = wrapper.state().alert
    const paramsState = wrapper.state().params
    let alert = {
      show: false,
      message: '',
      color: ''
    }
    let params = {
      id: '',
      field: '',
      value: ''
    }
    expect(openModal).toEqual(false)
    expect(customers).toEqual([])
    expect(customer).toEqual({})
    expect(updateCustomer).toEqual({})
    expect(spinner).toEqual(true)
    expect(modalSpinner).toEqual(false)
    expect(alertState).toEqual(alert)
    expect(paramsState).toEqual(params)
  })

  it('it should render App component', () => {
    const wrapper = renderer.create(<App />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })
})
