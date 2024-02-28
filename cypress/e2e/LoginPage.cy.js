describe('Verify correct functioning of the login page', () => {

        beforeEach (() => {
      cy.visit("/")
    })
  
    it('User logs in with correct credentials', () => {
        cy.LogIn('test', 'test')
        cy.url().should('eq', 'https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
        cy.get('h2').should('be.visible').and('contain', 'Login Successful :)')
        cy.get('h4').should('be.visible').and('contain', 'Click here to go back to the home page')
    })

    it('After logging in user can go back to the home page using link', () => {
        cy.LogIn('test', 'test')
        cy.get('h4 > a').click()
        cy.url().should('eq', 'https://trytestingthis.netlify.app/')
    })

    it('User tries to log in with wrong credentials', () => {
        cy.LogIn('jkowal', 'hasło123')
        cy.SubmittingWrongCred()
    })

    it('User tries to log in with just username', () => {
        cy.get('#uname').type('jkowal')
        cy.SubmittingWrongCred()
    })

    it('User tries to log in with just password', () => {
        cy.get('#pwd').type('hasło123')
        cy.SubmittingWrongCred()
    })

    it('User tries to log in without submitting any credentials', () => {
        cy.SubmittingWrongCred()
    })
})