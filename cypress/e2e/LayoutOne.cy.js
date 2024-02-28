describe('Verify if section “This is your layout one” contains of every required element and they work as expected', () => {

    beforeEach (() => {
      cy.visit("/")
    })
  
    it('Clicking on button “Your Sample Alert Button!” and choosing "OK"', () => {
        cy.get('.pop-up-alert > button').click()
        cy.ConfirmTextInWindow()
        cy.get('.pop-up-alert > #demo').should('be.visible').and('contain', 'You Pressed the OK Button!')
    })

    it('Clicking on button “Your Sample Alert Button!” and choosing "Cancel"', () => {
        cy.get('.pop-up-alert > button').click()
        cy.ConfirmTextInWindow()
        cy.on('window:confirm',function(alert){
            return false;
        })
        cy.get('.pop-up-alert > #demo').should('be.visible').and('contain', 'You pressed the Cancel Button!')
    })

    it('After hovering over tooltip area correct textbox shows up', () => {
        cy.get('.tooltip').should('be.visible').and('contain', 'This is your Sample Tooltip Option')
        cy.get('.tooltip').trigger('mouseover')
        cy.get('.tooltiptext').invoke('show').should('exist').and('contain', 'This is your sample Tooltip text')
    })

    it('A sample image has correct title', () => {
        cy.get('.side > h4').should('be.visible').and('have.text', 'This is your sample photo')
    })

    it('A sample image is visible', () => {
        cy.get('.fakeimg').should('be.visible').and('contain', 'Image')
    })

    it('A sample image has correct description', () => {
        cy.get('.side > :nth-child(6)').should('be.visible').and('have.text', 'This is your description of the photo')
    })

    it('Food icons are visible', () => {
        cy.get('.side > :nth-child(9)').should('exist').and('be.visible')
    })

    it('Verify if “Double-click me” button has correct description', () => {
        cy.get('.side > :nth-child(12)').should('be.visible').and('have.text', 'This is your sample Double Click')
    })

    it('Verify if “Double-click me” button is visible', () => {
        cy.get('[ondblclick="myFunction()"]').should('exist').and('be.visible')
    })

    it('Verify if “Double-click me” button works correctly after double-clicking', () => {
        cy.get('[ondblclick="myFunction()"]').dblclick()
        cy.get('.side').should('contain', 'Your Sample Double Click worked!')
    })

    it('Verify if “Double-click me” button works correctly after single-click', () => {
        cy.get('[ondblclick="myFunction()"]').click()
        cy.get('.side').should('contain', '')
    })

    it('Verify if elements for drag and drop function have correct captions', () => {
        cy.get('.side > :nth-child(18)').should('be.visible').and('have.text', 'This is your Sample drag and drop')
        cy.get('.side > :nth-child(19)').should('be.visible').and('have.text', 'Drag Pizza into the Pizza box:')
    })

    it('Verify if drag and drop function works correctly when pizza picture is not in the box', () => {
        cy.get('#drag1').should('exist')
        cy.get('#div1').should('be.visible').and('be.empty')
    })

    it('Verify if user can drag and drop pizza picture into the box', () => {
        cy.get('#drag1').drag('#div1')
        cy.get('#div1').should('not.be.empty')
    })

    it('Verify if login form is visible and in correct place in “This is your layout one” section', () => {
        cy.get('.side > fieldset').should('exist')
    })

    it('Verify if login form has correct title', () => {
        cy.get('.side > fieldset > legend').should('exist').and('have.text', 'This is your Sample login page:')
    })

    it('Verify if login form has correct description', () => {
        cy.get('fieldset > h5').should('contain', 'Enter')
        cy.get('fieldset > h5').should('contain', 'Username:test')
        cy.get('fieldset > h5').should('contain', 'Password:test')
        cy.get('fieldset > h5').should('contain', 'to be directed to a new login page and any other value to display error message')
    })

    it('Verify if the login form has all required elements', () => {
        cy.get('[for="uname"]').should('have.text', 'Username:')
        cy.get('#uname').should('exist')
        cy.get('[for="pwd"]').should('have.text', 'Password:')
        cy.get('#pwd').should('exist')
        cy.get('[type="submit"]').should('exist')
    })
})