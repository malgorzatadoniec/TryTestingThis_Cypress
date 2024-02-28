describe('Verify if links in footer work as expected', () => {

    beforeEach (() => {
      cy.visit('/')
    })

    it('GitHub link', () => {
        cy.get(':nth-child(3) > a').click()

        cy.origin('https://github.com', () => {
            cy.url().should('eq', 'https://github.com/oviyak/code')
        })
    })

    it('Linkedin link', () => {
        cy.get(':nth-child(4) > a').click()

        cy.origin('https://www.linkedin.com', () => {
            cy.url().should('eq', 'https://www.linkedin.com/in/oviyak/')
        })
    })
})