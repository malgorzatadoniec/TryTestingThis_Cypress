describe('Verify correct layout of main section of home page', () => {

    beforeEach (() => {
      cy.visit("/")
    })
  
      it('Verify if Form is visible and has correct title', () => {
        cy.get('.main > h4').should('be.visible').and('have.text', 'This is your sample Form')
        cy.get('form > fieldset').should('exist').and('be.visible')
    })

    it('Verify if there is correct text under the Form', () => {
        cy.get('.main > :nth-child(4)').should('be.visible').and('have.text', 'Some text..')
        cy.get('.main > :nth-child(5)').should('be.visible').and('have.text', 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')
    })

    it('Verify if there is correct caption under “This is your layout three” title', () => {
        cy.get('.main > h5').should('be.visible').and('have.text', 'Title description, Sep 2, 2017')
    })

    it('Verify if Table exist and has correct columns” title', () => {
        cy.get('.main > :nth-child(9)').should('exist').and('be.visible')
        cy.get(':nth-child(9) > legend').should('be.visible').and('have.text', 'This is your Sample Table:')
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible').and('have.text', 'Firstname')
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible').and('have.text', 'Lastname')
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('be.visible').and('have.text', 'Gender')
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('be.visible').and('have.text', 'Age')
        cy.get('tbody > :nth-child(1) > :nth-child(5)').should('be.visible').and('have.text', 'Occupation')

    })
})