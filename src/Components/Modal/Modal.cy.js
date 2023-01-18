import React from 'react'
import Modal from './Modal'

describe('<Modal />', () => {
    it('render modal window with proper number values', () => {
        const homeScore = '3';
        const awayScore = '5';
        cy.mount(<Modal
            onSubmit={() => {}}
            homeLabel='homeName'
            awayLabel='awayName'
            homeInput={homeScore}
            awayInput={awayScore}
            index='2'
            inputType="number"
            operation="Update" />)
        cy.get('Button').click();
        cy.get('input[id="homeTeam"]').should('have.value', homeScore);
        cy.get('input[id="awayTeam"]').should('have.value', awayScore);
    });

    it('render modal window with proper empty values', () => {
        cy.mount(<Modal
            onSubmit={() => {}}
            homeLabel='homeName'
            awayLabel='awayName'
            homeInput=''
            awayInput=''
            index={null}
            inputType="text"
            operation="Add" />)
        cy.get('Button').click();
        cy.get('input[id="homeTeam"]').should('have.value', '');
        cy.get('input[id="awayTeam"]').should('have.value', '');
        cy.get('h2').contains('Add');
    });
    
    it('render modal window and update scores', () => {
        const expectedHomeScore = '3';
        const expectedAwayScore = '6';
        cy.mount(<Modal
            onSubmit={()=>{}}
            homeLabel='homeName'
            awayLabel='awayName'
            homeInput='2'
            awayInput='4'
            index='2'
            inputType="number"
            operation="Update" />)
        cy.get('Button').click();
        cy.get('h2').contains('Update');
        cy.get('input[id="homeTeam"]').clear().type('3').trigger('change');
        cy.get('input[id="awayTeam"]').clear().type('6').trigger('change');
        cy.get('input[id="homeTeam"]').should('have.value', expectedHomeScore);
        cy.get('input[id="awayTeam"]').should('have.value', expectedAwayScore);

    });
});
