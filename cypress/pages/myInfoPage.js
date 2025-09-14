class MyInfoPage{
    selectorList(){
        const selector = {
            myInfoButton:     '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField:   '[name="firstName"]',
            lasNameField:     '[name="lastName"]',
            genericField:     '.oxd-input--active',
            dataField:        '[placeholder="yyyy-mm-dd]',
            dateCloseButton:  '.--close',
            selectTextInput:  '.oxd-select-text-input',
            radioGender:      '[type="radio"]',
            submitButton:     '[type="submit"]',
            genericComboBox:  '.oxd-select-text--arrow'
        }
        return selector
    }
    fillPersonalDetails(firstName, lastName, IdEmployee, dlNumber, dlExpiration){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lasNameField).clear().type(lastName)
        cy.get(this.selectorList().genericField).eq(3).clear().type(IdEmployee)
        cy.get(this.selectorList().genericField).eq(5).clear().type(dlNumber)
        cy.get(this.selectorList().genericField).eq(7).clear().type(dlExpiration)
        cy.get(this.selectorList().dateCloseButton).click()
    }
    fillVisaInfo(){
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(3').click()
        cy.get(this.selectorList().genericComboBox).eq(2).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(6').click()
        //cy.get(this.selectorList().radioGender).eq(1).check()
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    }
    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}
export default MyInfoPage