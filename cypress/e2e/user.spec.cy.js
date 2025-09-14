import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new MyInfoPage()

describe('Orange HRM Login', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    myInfo.fillPersonalDetails(chance.first(), chance.last(), chance.string(),'DL123456', '1978-10-01')
    myInfo.fillVisaInfo()
    myInfo.saveForm()
  })
})