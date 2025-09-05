class LoginPage{
    selectorList() {
        const selector = {
            usernameField:    '[name="username"]',
            passwordField:    '[name="password"]',
            loginButton:      '[type="submit"]',
            credencialAlert:  '[role="alert"]'
        }
    }
    accessLoginPage(){
       cy.visit('/auth/login') //otimizado a URL basica do projeto no arquivo cypress.config.js que inicializa o Cypress
    }

    loginWithUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
}
export default LoginPage