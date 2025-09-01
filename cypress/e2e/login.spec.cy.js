describe('Orange HRM Login', () => {

const selectorList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '[type="submit"]',
  sectionTitle: '.oxd-topbar-header-breadcrumb-module',
  wrongCredencialAlert: '[role="alert"]'
}


  it('login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    //verificar se a url esta posicionada na pagina principal
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    //alternativa de verificacao de posicionamento do cypress utilizando elemento da pagina principal
    cy.get(selectorList.sectionTitle)
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('Test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
})