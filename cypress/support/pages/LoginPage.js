import basePage from './BasePage'


/**
 * LoginPage class representing the login page of the application.
 */
class LoginPage{

    // Defining Web Elements

    elements = {
    
        // CSS selector for the username textbox
        textbox_Username: () => cy.get("#user-name"),

        // CSS selector for the password textbox
        textbox_Password: () => cy.get('#password'),

        // CSS selector for the login button
        button_LogIn: () => cy.get('#login-button'),

    }

    // Operations/Actions with Web Elements


    /**
    * Fill the username textbox with the provided username.
    * @param {string} username - The username to be filled in the textbox.
    */
    fill_Textbox_Username(username){
        basePage.fillTextBox(this.elements.textbox_Username(), username)
    }

    /**
    * Fill the password textbox with the provided password.
    * @param {string} password - The password to be filled in the textbox.
    */
    fill_Textbox_Password(password){
        basePage.fillTextBox(this.elements.textbox_Password(), password)
    }

    /**
    * Click on the login button.
    */
    click_Button_LogIn(){
        basePage.clickOnWebElement(this.elements.button_LogIn())
    }

    /**
    * Perform login to the application with the provided username and password.
    * @param {string} username - The username to be used for login.
    * @param {string} password - The password to be used for login.
    */
    loginToApplication(username, password){

        // Logging the login action with provided username and password
        cy.log('Logging into application using '+ username + ' and '+ password)

        // Filling the username and password fields and clicking the login button
        this.fill_Textbox_Username(username)
        this.fill_Textbox_Password(password)
        this.click_Button_LogIn()

    }

}

// Exporting an instance of the LoginPage class to be used by other files
export default new LoginPage