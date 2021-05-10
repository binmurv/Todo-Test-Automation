/// <reference types = "cypress" />

describe('filter', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    
        cy.get('.new-todo').type("Learn Cypress{enter}")
        cy.get('.new-todo').type("Learn JS{enter}")
        cy.get('.new-todo').type("Learn RobotFW{enter}")
        cy.get('.new-todo').type("Attend MoT{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        // mark as complete
        cy.get('.todo-list li:nth-child(1) .toggle').click()
        cy.get('.todo-list li:nth-child(2) .toggle').click()
        cy.get('.todo-list li:nth-child(5) .toggle').click()
    })

    it('should filter active todos', () => {
        cy.contains('Active').click()

        cy.get(':nth-child(1) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')

        cy.get(':nth-child(1) > .view > label').should('not.have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(2) > .view > label').should('not.have.css', 'text-decoration-line', 'line-through')

        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter completed todos', () => {
        cy.contains('Completed').click()

        cy.get(':nth-child(1) > .view > .toggle').should('be.checked')
        cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
        cy.get(':nth-child(3) > .view > .toggle').should('be.checked')

        cy.get(':nth-child(1) > .view > label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(2) > .view > label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(3) > .view > label').should('have.css', 'text-decoration-line', 'line-through')

        cy.get('.todo-list li').should('have.length', 3)
    })

    it('should filter all todos', () => {
        cy.contains('All').click()

        cy.get(':nth-child(1) > .view > .toggle').should('be.checked')
        cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
        cy.get(':nth-child(3) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(4) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(5) > .view > .toggle').should('be.checked')

        cy.get(':nth-child(1) > .view > label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(2) > .view > label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(3) > .view > label').should('not.have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(4) > .view > label').should('not.have.css', 'text-decoration-line', 'line-through')
        cy.get(':nth-child(5) > .view > label').should('have.css', 'text-decoration-line', 'line-through')

        cy.get('.todo-list li').should('have.length', 5)
    })
})