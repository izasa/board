import React from 'react'
import ScoreTable from './ScoreTable'

const mockTable =
    [
        {
            "homeName": "testTeam1",
            "homeScore": 3,
            "awayName": "awayTeam1",
            "awayScore": 1,
            "date": 1673997796263
        }
    ]

describe('<ScoreTable />', () => {
    it(' render with game data  ', () => {
        const expectedHomeTeam = 'testTeam1'
        const expectedAwayTeam1 = 'awayTeam1'
        const expectedScore = '3 : 1'
        cy.mount(<ScoreTable board={mockTable} updateGameModal={()=>{}} removeGame={()=>{}} />);
        cy.get('td').contains(expectedHomeTeam);
        cy.get('td').contains(expectedAwayTeam1);
        cy.get('td').contains(expectedScore);
    })

    it('call update function', () => {
        const onUpdateGameModalSpy = cy.spy().as('onUpdateGameModalSpy');
        cy.mount(<ScoreTable board={mockTable} updateGameModal={onUpdateGameModalSpy} removeGame={()=>{}} />);
        cy.get('td').contains('awayTeam1').next().click();
        cy.get('[data-cy=submit]').click();
        cy.get('@onUpdateGameModalSpy').should('have.been.called')
    })

    it('call funtion to remove game', () => {
        const onRemoveGameModalSpy = cy.spy().as('onRemoveGameModalSpy');
        const expectedIndex = 0;
        cy.mount(<ScoreTable board={mockTable} updateGameModal={()=>{}} removeGame={onRemoveGameModalSpy} />);
        cy.get('td').contains('awayTeam1').next().next().click();
        cy.get('@onRemoveGameModalSpy').should('have.been.calledWith', expectedIndex) 
    })

})