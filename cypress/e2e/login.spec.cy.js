describe('Orange HRM Login', () => {
  it('login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    //verificar se a url esta posicionada na pagina principal
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    //alternativa de verificacao de posicionamento do cypress utilizando elemento da pagina principal
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('Test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
  })
})