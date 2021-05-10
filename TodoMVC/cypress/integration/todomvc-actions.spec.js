/// <reference types = "cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Learn Cypress')
    })

    it('should add a new to do to the list', () => {    
        todoPage.validateTodoText(0, 'Learn Cypress')
    
        todoPage.validateToggleState(0, false)
    })
    
    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
          todoPage.toggleTodo(0)
          todoPage.validateTodoCompletedState(0, true)
        })
        
    
        it('should clear completed todos', () => {
            todoPage.toggleTodo(0)
            todoPage.clearCompleted()
            todoPage.validateNumberOfTodosShown(0)
        })
    })
}) 