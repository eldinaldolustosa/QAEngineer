import userData from '../fixtures/userData.json'


describe('Orange HRM Login', () => {

const selectorList = {
  usernameField:    '[name="username"]',
  passwordField:    '[name="password"]',
  loginButton:      '[type="submit"]',
  sectionTitle:     '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid:    '.orangehrm-dashboard-grid',
  credencialAlert:  '[role="alert"]'
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
  it('login - Success', () => {
    cy.visit('/auth/login') //otimizado a URL basica do projeto no arquivo cypress.config.js que inicializa o Cypress
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    //verificar se a url esta posicionada na pagina principal
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    //alternativa de verificacao de posicionamento do cypress utilizando elemento da pagina principal
    cy.get(selectorList.dashboardGrid)
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.credencialAlert)
  })
})