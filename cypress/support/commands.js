require('@4tw/cypress-drag-drop')

//scenario4

Cypress.Commands.add('ConfirmTextInWindow', () => {
cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains('Press a button!');
  })
})

// scenario5
Cypress.Commands.add('LogIn', (username, password) => {
    cy.get('#uname').type(username)
    cy.get('#pwd').type(password)
    cy.get('[type="submit"]').click()
  })

Cypress.Commands.add('SubmittingWrongCred', () => {
    cy.get('[type="submit"]').click()
    cy.on('window:confirm',(text)=>{
      expect(text).to.contains('Wrong Credentials! Try again!')
    })
    cy.url().should('eq', 'https://trytestingthis.netlify.app/')
  })

// scenario7

Cypress.Commands.add('Submit', () => {
  cy.get('.btn').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })