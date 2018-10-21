import React from 'react'
import renderer from 'react-test-renderer'
import AlertMessage from './'

/* eslint-disable */
describe('AlertMessage component', () => {
  
  it('it should render AlertMessage component', () => {
    const wrapper = renderer.create(<AlertMessage visible/>);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should not render AlertMessage component', () => {
    const wrapper = renderer.create(<AlertMessage />);
    let tree = wrapper.toJSON()
    expect(tree).toBe(null)  
  })
})