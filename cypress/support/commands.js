require('@4tw/cypress-drag-drop')

//scenario4

Cypress.Commands.add('buttonWindow', () => {
cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains('Press a button!');
  })
})

// scenario5
Cypress.Commands.add('LogIn', () => {
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
  })

Cypress.Commands.add('wrongCred', () => {
    cy.get('[type="submit"]').click()
    cy.on('window:confirm',(text)=>{
      expect(text).to.contains('Wrong Credentials! Try again!')
    })
    cy.url().should('eq', 'https://trytestingthis.netlify.app/')
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