describe('Verify if all elements of the Form are visible and are working correctly', () => {

    beforeEach (() => {
      cy.visit("/")
    })
  
      it('User input in “First name:” and “Last name:” fields', () => {
        cy.get('[for="fname"]').should('be.visible').and('have.text', 'First name:')
        cy.get('[for="lname"]').should('be.visible').and('have.text', 'Last name:')
        cy.get('#fname').type('Jan')
        cy.get('#lname').type('Kowalski')
        cy.get('.btn').click()
        cy.url().should('contain', 'fname=Jan&lname=Kowalski&')
    })

    it('User chooses gender: Male', () => {
        cy.get('[for="male"]').should('be.visible').and('have.text', 'Male')
        cy.get('#male').check()
        cy.get('.btn').click()
        cy.url().should('contain', '&gender=male&')
    })

    it('User chooses gender: Female', () => {
        cy.get('[for="female"]').should('be.visible').and('have.text', 'Female')
        cy.get('#female').check()
        cy.get('.btn').click()
        cy.url().should('contain', '&gender=female&')
    })

    it('User chooses gender: Other', () => {
        cy.get('[for="other"]').should('be.visible').and('have.text', 'Other')
        cy.get('#other').check()
        cy.get('.btn').click()
        cy.url().should('contain', '&gender=other&')
    })

    it('User chooses only one option: Option 1', () => {
        cy.get('fieldset > :nth-child(23)').should('be.visible').and('have.text', 'Choose an option:')
        cy.get(':nth-child(24)').should('be.visible').and('have.text', 'Lets you select only one option')
        cy.get('#option').select(1).invoke('val').should('eq', 'option 1')
        cy.get('.btn').click()
        cy.url().should('contain', '&option=option+1&')
    })

    it('User chooses only one option: Option 2', () => {
        cy.get('#option').select(2).invoke('val').should('eq', 'option 2')
        cy.get('.btn').click()
        cy.url().should('contain', '&option=option+2&')
    })

    it('User chooses only one option: Option 3', () => {
        cy.get('#option').select(3).invoke('val').should('eq', 'option 3')
        cy.get('.btn').click()
        cy.url().should('contain', '&option=option+3&')
    })

    it('User tries choosing more than one option when he can select only one', () => {
        cy.get('#option').select(3).invoke('val').should('eq', 'option 3')
        cy.get('#option').select(2).invoke('val').should('eq', 'option 2')
        cy.get('.btn').click()
        cy.url().should('not.contain', '&option=option+3&')
        cy.url().should('contain', '&option=option+2&')
    })
})