/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('visual validation', () => {
    const todoPage = new TodoPage()
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({
        appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!',
        browser: [
            {name: 'chrome', width: 1026, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'chrome', width: 1026, height: 768},
            {deviceName: 'iPhone X'},
        ]
    }))
    
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Learn Cypress')
        todoPage.addTodo('Learn Robot FW')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})