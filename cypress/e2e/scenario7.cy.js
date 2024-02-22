describe('Verify if all elements of the Form are visible and are working correctly', () => {

    beforeEach (() => {
      cy.visit("/")
    })
  
      it('User input in “First name:” and “Last name:” fields', () => {
        cy.get('[for="fname"]').should('be.visible').and('have.text', 'First name:')
        cy.get('[for="lname"]').should('be.visible').and('have.text', 'Last name:')
        cy.get('#fname').type('Jan')
        cy.get('#lname').type('Kowalski')
        cy.Submit()
        cy.url().should('contain', 'fname=Jan&lname=Kowalski&')
    })

    it('User chooses gender: Male', () => {
        cy.get('[for="male"]').should('be.visible').and('have.text', 'Male')
        cy.get('#male').check()
        cy.Submit()
        cy.url().should('contain', '&gender=male&')
    })

    it('User chooses gender: Female', () => {
        cy.get('[for="female"]').should('be.visible').and('have.text', 'Female')
        cy.get('#female').check()
        cy.Submit()
        cy.url().should('contain', '&gender=female&')
    })

    it('User chooses gender: Other', () => {
        cy.get('[for="other"]').should('be.visible').and('have.text', 'Other')
        cy.get('#other').check()
        cy.Submit()
        cy.url().should('contain', '&gender=other&')
    })

    it('User chooses only one option: Option 1', () => {
        cy.get('fieldset > :nth-child(23)').should('be.visible').and('have.text', 'Choose an option:')
        cy.get(':nth-child(24)').should('be.visible').and('have.text', 'Lets you select only one option')
        cy.get('#option').select(1).invoke('val').should('eq', 'option 1')
        cy.Submit()
        cy.url().should('contain', '&option=option+1&')
    })

    it('User chooses only one option: Option 2', () => {
        cy.get('#option').select(2).invoke('val').should('eq', 'option 2')
        cy.Submit()
        cy.url().should('contain', '&option=option+2&')
    })

    it('User chooses only one option: Option 3', () => {
        cy.get('#option').select(3).invoke('val').should('eq', 'option 3')
        cy.Submit()
        cy.url().should('contain', '&option=option+3&')
    })

    it('User tries choosing more than one option when he can select only one', () => {
        cy.get('#option').select(3).invoke('val').should('eq', 'option 3')
        cy.get('#option').select(2).invoke('val').should('eq', 'option 2')
        cy.Submit()
        cy.url().should('not.contain', '&option=option+3&')
        cy.url().should('contain', '&option=option+2&')
    })

    it('User chooses multiple options', () => {
        cy.get(':nth-child(28)').should('be.visible').and('have.text', 'Lets you select multiple options')
        cy.get('#owc').should('exist').and('be.visible')
        cy.get('#owc > [value="option"]').should('have.text', 'Option')
        cy.get('#owc > [value="option 1"]').should('have.text', 'Option 1')
        cy.get('#owc > [value="option 2"]').should('have.text', 'Option 2')
        cy.get('#owc > [value="option 3"]').should('have.text', 'Option 3')
        cy.get(':nth-child(32)').should('be.visible').and('have.text', 'Choose applicable options:')
        cy.get(':nth-child(35)').should('be.visible').and('contain', 'Option 1')
        cy.get(':nth-child(38)').should('be.visible').and('contain', 'Option 2')
        cy.get(':nth-child(41)').should('be.visible').and('contain', 'Option 3')
        cy.get('[name="option1"]').check()
        cy.get('[name="option2"]').check()
    })

    it('User chooses multiple options and submits the Form (3 options)', () => {
        cy.get('[name="option1"]').check()
        cy.get('[name="option2"]').check()
        cy.get('[name="option3"]').check()
        cy.Submit()
        cy.url().should('contain', '&option1=Option+1&option2=Option+2&option3=Option+3&')
    })

    it('User chooses multiple options and submits the Form (2 options)', () => {
        cy.get('[name="option1"]').check()
        cy.get('[name="option3"]').check()
        cy.Submit()
        cy.url().should('contain', '&option1=Option+1&option3=Option+3&')
    })

    it('User chooses multiple options and submits the Form (1 option)', () => {
        cy.get('[name="option2"]').check()
        cy.Submit()
        cy.url().should('contain', '&option2=Option+2&')
    })

    it('User submits a Form with chosen flavor (example from the list)', () => {
        cy.get('[for="datalists"]').should('be.visible').and('have.text', 'Start typing and it till automatically guess answer:')
        cy.get('[list="datalists"]').type('Mint')
        cy.Submit()
        cy.url().should('contain', '&Options=Mint&')
    })

    it('User submits a Form with chosen flavor (example outside the list)', () => {
        cy.get('[list="datalists"]').type('Berry')
        cy.Submit()
        cy.url().should('contain', '&Options=Berry&')
    })
    

    it('User chooses color', () => {
        cy.get('[for="favcolor"]').should('be.visible').and('have.text', 'Select your favorite color:')
        cy.get('#favcolor').should('exist').and('be.visible').invoke('val', '#D81851')
        cy.Submit()
        cy.url().should('contain', '&favcolor=%23d81851&')
    })

    it('User chooses date', () => {
        cy.get('[for="date"]').should('be.visible').and('have.text', 'Select a date:')
        cy.get('#day').should('exist').and('be.visible').type('2021-11-09')
        cy.Submit()
        cy.url().should('contain', '&day=2021-11-09&')
    })

    it('User chooses value on slider and submit the Form', () => {
        cy.get('[for="ranges"]').should('be.visible').and('have.text', 'Scroll to see a range value:')
        cy.get('#a').should('exist').and('be.visible').invoke('val', '86')
        cy.Submit()
        cy.url().should('contain', '&a=86&')
    })
})
