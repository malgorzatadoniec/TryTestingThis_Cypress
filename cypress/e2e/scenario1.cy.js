
describe('Correct home page layout', () => {

  beforeEach (() => {
    cy.visit("/")
  })

    it('Correct text in the title and header', () => {
      cy.get('h1').should('contain', 'Your Website to practice Automation Testing')
  })

    it('Correct buttons on navigation bar', () => {
      cy.get('.navbar').should('contain', 'Home')
      cy.get('.navbar').should('contain', 'Contact')
      cy.get('[href="/"]').should('have.class', 'bar-item')
  })
  
    it('Correct title of left side section', () => {
      cy.get('.main').should('contain', 'This is your layout two')
      cy.get('.main').should('contain', 'This is your layout three')
  })

    it('Correct sections titles in main page section', () => {
      cy.get('.side').should('contain', 'This is your layout one')
  })

    it('Correct text in footer', () => {
      cy.get('.footer').should('be.visible')
      cy.get('.footer > :nth-child(1)').should('contain', 'Created by Oviya Kandaswamy')
      cy.get('.footer > :nth-child(2)').should('contain', 'Thank you for using this Website :)')
      cy.get('.footer > :nth-child(3)').should('contain', 'Source code for this website is available')
      cy.get('.footer > :nth-child(4)').should('contain', 'Please suggest any improvements to this website. You can reach me in')
  })
})