import React from 'react'
import Banner from './Banner'

describe('<Banner />', () => {
  it('render properly', () => {
    cy.mount(<Banner />)
    cy.get('h6').contains('Live Football World Cup Score Board');
  })
})