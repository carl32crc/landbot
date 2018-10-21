import React from 'react'
import ContentTable from './'
import { shallow } from 'enzyme'

/* eslint-disable */
describe('ContentTable component', () => {
  
  it('it should not render ContentTable component', () => {
    const wrapper = shallow(<ContentTable />)
    const component = wrapper.contains(<ContentTable />)
    expect(component).toBe(false)
  })
})