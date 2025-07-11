import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboradPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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
   myInfoPage.fillPersonalDetails( 'FirsName1', 'LastName1', 'MiddleName1')
   myInfoPage.fillEmployeeDetails('EmployeeID', 'OtherID', '123654' , '2025-07-10')
   myInfoPage.fillStatus()
   myInfoPage.saveForm()
 


  
  })

  
 it('login - Fail', () => {
   loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkAccessInvalid()
   
  

  
  
  })
  
})