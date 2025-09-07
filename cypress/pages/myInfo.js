class MyInfo{
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
    fillInfo(){
        cy.get(this.selectorList().firstNameField).clear().type('Eddie')
        cy.get(this.selectorList().lasNameField).clear().type('Lustosa')
        cy.get(this.selectorList().genericField).eq(4).clear().type('IdEmployee')
        cy.get(this.selectorList().genericField).eq(5).clear().type('DLTeste')
        cy.get(this.selectorList().genericField).eq(7).clear().type('2025-01-09')
        cy.get(this.selectorList().dateCloseButton).click()
        //cy.get(this.selectorList().radioGender).eq(1).check()
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(3').click()
        cy.get(this.selectorList().genericComboBox).eq(2).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(6').click()
        cy.get(this.selectorList().submitButton).click()
    }
}
export default MyInfo