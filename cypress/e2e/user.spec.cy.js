import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboradPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboradPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
  
      
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateFiel: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitbuttom: "[type='submit']",
      NacionalityButtom: "[clear='false']",
      genericCombobox: "[clear='false']",
      thirdItemCombobox: ':nth-child(4) > span' ,
     secondItemCombobox: '.oxd-select-dropdown > :nth-child(10)',
    }



  it.only('User info Update - Sucess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      

    dashboradPage.checkDashboardPage()
    menuPage.accessMyInfo()

    
    cy.get(selectorsList.firstNameField).clear().type('firsNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.middleNameField).clear().type('middle test')
    cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number Test')
    cy.get(selectorsList.dateFiel).eq(0).clear().type('2040-05-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()   
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.submitbuttom).eq(0).click()
    //cy.get('body').should('contain','Sucessfully Updated')
    cy.get('.oxd-toast')


  
  })
 it('login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  

  
  
  })
  
})