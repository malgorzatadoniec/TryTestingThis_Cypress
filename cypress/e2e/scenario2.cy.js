describe('Verify if buttons "Home" and "Contact" on navigation bar redirect user to correct pages', () => {
  
      it('“Contact” button redirect user to contact page', () => {
        cy.visit('/')
        cy.get('[href="/contact"]').click()
        cy.url().should('eq', 'https://trytestingthis.netlify.app/contact')
    })

    it('Correct text in main page of contact page', () => {
        cy.visit('https://trytestingthis.netlify.app/contact')
        cy.get('.side > h2').should('be.visible').and('contain', 'Thank you for using this Website :)')
        cy.get('.side > :nth-child(2)').should('be.visible').and('contain', 'Source code for this website is available')
        cy.get('.side > :nth-child(3)').should('be.visible').and('contain', 'Please suggest any improvements to this website. You can reach me')
    })

    it('“Home” button redirect user to home page', () => {
        cy.visit('https://trytestingthis.netlify.app/contact')
        cy.get('[href="/"]').click()
        cy.url().should('eq', 'https://trytestingthis.netlify.app/')
    })
})  