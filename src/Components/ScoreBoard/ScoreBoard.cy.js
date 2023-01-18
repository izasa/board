import React from 'react'
import ScoreBoard from './ScoreBoard'

describe('<ScoreBoard />', () => {
    it('render without table on start', () => {
        cy.mount(<ScoreBoard />);

        cy.get('button').contains('Add game')
        cy.get('[data-cy="title"]').contains('Score board: currently 0 matches are played');
        cy.get('table').should('not.exist');
    });

    it('render without table on with proper order by date', () => {
        cy.mount(<ScoreBoard />);

        cy.get('button').click();
        cy.get('input[id="homeTeam"]').type('homeTeamName1');
        cy.get('input[id="awayTeam"]').type('awayTeamName1');
        cy.get('[data-cy=submit]').click();

        cy.get('[data-cy="title"]').contains('Score board: currently 1 match is played');
        cy.get('table').should('exist');

        cy.get('[data-cy="Add"]').click();
        cy.get('input[id="homeTeam"]').type('homeTeamName2');
        cy.get('input[id="awayTeam"]').type('awayTeamName2');
        cy.get('[data-cy=submit]').click();

        cy.get('[data-cy="title"]').contains('Score board: currently 2 matches are played');
        cy.get('tr td:nth-child(2)').contains('homeTeamName1').should('be.visible')
        cy.get("tbody tr:nth-child(2) td:nth-child(2)") .contains("homeTeamName2").should('be.visible')

    });


    it.only('render without table on with proper order by score', () => {
        cy.mount(<ScoreBoard />);

        cy.get('button').click();
        cy.get('input[id="homeTeam"]').type('homeTeamName1');
        cy.get('input[id="awayTeam"]').type('awayTeamName1');
        cy.get('[data-cy=submit]').click();

        cy.get('[data-cy="title"]').contains('Score board: currently 1 match is played');
        cy.get('table').should('exist');

        cy.get('[data-cy="Add"]').click();
        cy.get('input[id="homeTeam"]').type('homeTeamName2');
        cy.get('input[id="awayTeam"]').type('awayTeamName2');
        cy.get('[data-cy=submit]').click();
        cy.get('tbody  tr:nth-child(2) td:nth-child(5)').click();

        cy.get('input[id="homeTeam"]').clear().type('3').trigger('change');
        cy.get('input[id="awayTeam"]').clear().type('6').trigger('change');
        cy.get('[data-cy=submit]').click();

        cy.get('[data-cy="title"]').contains('Score board: currently 2 matches are played');
        cy.get('tr td:nth-child(2)').contains('homeTeamName2').should('be.visible');
        cy.get("tbody tr:nth-child(2) td:nth-child(2)").contains("homeTeamName1").should('be.visible');

    });

});

