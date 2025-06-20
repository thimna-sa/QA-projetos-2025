import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
      wrongCredentialAlert: '.oxd-alert-content',
      dashboardGrid: '.orangehrm-dashboard-grid',
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateFiel: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitbuttom: "[type='submit']",
    }



  it.only('User info Update - Sucess', () => {
    cy.visit('')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firsNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.middleNameField).clear().type('middle test')
    cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number Test')
    cy.get(selectorsList.dateFiel).eq(0).clear().type('2040-05-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitbuttom).eq(0).click()
    cy.get('body').should('contain','Sucessfully Updated')
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