import userData from '../fixtures/userData.json'


describe('Orange HRM Login', () => {

const selectorList = {
  usernameField:    '[name="username"]',
  passwordField:    '[name="password"]',
  loginButton:      '[type="submit"]',
  sectionTitle:     '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid:    '.orangehrm-dashboard-grid',
  credencialAlert:  '[role="alert"]',
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
/*
Tratamento Cypress Fixtures
const userData = {
  userSuccess:{
    username: 'Admin',
    password: 'admin123'
  },
  userFail:{
    username: 'teste',
    password: 'teste'
  }
}
*/
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login') //otimizado a URL basica do projeto no arquivo cypress.config.js que inicializa o Cypress
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    //verificar se a url esta posicionada na pagina principal
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    //alternativa de verificacao de posicionamento do cypress utilizando elemento da pagina principal
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Eddie')
    cy.get(selectorList.lasNameField).clear().type('Santos')
    cy.get(selectorList.genericField).eq(4).clear().type('IdEmployee')
    cy.get(selectorList.genericField).eq(5).clear().type('DLTeste')
    cy.get(selectorList.genericField).eq(7).clear().type('2025-01-09')
    cy.get(selectorList.dateCloseButton).click()
    //cy.get(selectorList.radioGender).eq(1).check()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    cy.get(selectorList.genericComboBox).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    cy.get(selectorList.genericComboBox).eq(1).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(3').click()
    cy.get(selectorList.genericComboBox).eq(2).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(6').click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.credencialAlert)
  })
})