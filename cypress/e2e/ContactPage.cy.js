describe('Verify if links on contact page work as expected', () => {

    beforeEach (() => {
      cy.visit('/contact')
    })

    it('GitHub link', () => {
        cy.get('.side > :nth-child(2) > a').click()

        cy.origin('https://github.com', () => {
            cy.url().should('eq', 'https://github.com/oviyak/code')
        })
    })

    it('Linkedin link', () => {
        cy.get('.side > :nth-child(3) > a').click()

        cy.origin('https://www.linkedin.com', () => {
            cy.url().should('eq', 'https://www.linkedin.com/in/oviyak/')
        })
    })
})