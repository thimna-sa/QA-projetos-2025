import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboradPage.js'
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()
const dashboradPage = new DashboardPage()

describe('Login Orange HRM Tests', () =>{

 it('login - Fail', () => {
   loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkAccessInvalid()
  })

it('User - Sucess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      dashboradPage.checkDashboardPage()



})
} )
  

  
