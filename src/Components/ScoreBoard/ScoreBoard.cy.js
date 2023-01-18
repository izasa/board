import React from 'react'
import ScoreBoard from './ScoreBoard'

describe('<ScoreBoard />', () => {
  it('render without table on start', () => {
    cy.mount(<ScoreBoard />);

    cy.get('button').contains('Add game')
    cy.get('[data-cy="title"]').contains('Score board: currently 0 matches are played');
    cy.get('table').should('not.exist');
  });

  
})