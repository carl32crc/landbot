import React from 'react'
import renderer from 'react-test-renderer'
import Input from './'

/* eslint-disable */
describe('Input component', () => {
  
  it('it should render Input component', () => {
    const wrapper = renderer.create(<Input />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })
})