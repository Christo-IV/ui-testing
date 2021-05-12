/// <reference types="cypress" />

context('Todo List', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('interact with list', () => {
        cy.get('input')
            .type('Lorem ipsum').should('have.value', 'Lorem ipsum')
        
        cy.get('button').click().then(() => {
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 1)

            cy.get('li').find('button').click().then(() => {
                cy.get('ul').find('li').should('have.length', 0)
            })
        })
    });

    it('Add 3 and remove 2', () => {
        cy.get('input')
            .type('Tres').should('have.value', 'Tres')

        cy.get('form').find('button').click().then(() => {
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 1)
        })

        cy.get('input')
            .type('Dos').should('have.value', 'Dos')

        cy.get('form').find('button').click().then(() => {
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 2)
        })

        cy.get('input')
            .type('Uno').should('have.value', 'Uno')

        cy.get('form').find('button').click().then(() => {
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 3)
        })

        // Deletion

        cy.get('li:nth-child(2)').find('button').click().then(() => {
            cy.get('ul').find('li').should('have.length', 2)
        })

        cy.get('li:nth-child(2)').find('button').click().then(() => {
            cy.get('ul').find('li').should('have.length', 1)
        })
    });
})
  