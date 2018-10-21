import React from 'react'
import renderer from 'react-test-renderer'
import Modal from './'

/* eslint-disable */
describe('Modal component', () => {
  
  it('it should render Modal component', () => {
    const wrapper = renderer.create(<Modal open />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should render Modal component', () => {
    const wrapper = renderer.create(<Modal />);
    let tree = wrapper.toJSON()
    expect(tree).toBe(null)
  })

})