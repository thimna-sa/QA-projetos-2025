class MyInfoPage{

    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firsName, lastName, middleName, ){  //nickName
        cy.get(this.selectorsList().firstNameField).clear().type(firsName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
       //cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
        
    }


    fillEmployeeDetails(employeeId, otherId, driversLicenseNunber, driversLincenseDate ){
        cy.get(this.selectorsList().genericField).eq(3).clear().type( employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNunber)
        cy.get(this.selectorsList().dateFiel).eq(0).clear().type(driversLincenseDate)
        //cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
        cy.get(this.selectorsList().dateCloseButton).click()
       
      

    }

    saveForm(){
        cy.get(this.selectorsList().submitbuttom).eq(0).click()
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast')  
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click()   
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }

}

export default MyInfoPage



