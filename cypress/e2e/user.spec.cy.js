import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboradPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const Chance = require('chance')


const chance = new Chance()
const loginPage = new LoginPage()
const dashboradPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User info Update - Sucess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      

   dashboradPage.checkDashboardPage()
   menuPage.accessMyInfo()
   myInfoPage.fillPersonalDetails( chance.first(), chance.last(), chance.string())
   myInfoPage.fillEmployeeDetails(chance.year(), chance.ssn(), '123654' , '2025-07-10')
   myInfoPage.fillStatus()
   myInfoPage.saveForm()
 


  
  })

})