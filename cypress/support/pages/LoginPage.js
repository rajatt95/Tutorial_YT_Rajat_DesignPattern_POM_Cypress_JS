/**
#  * Author: Rajat Verma
#  * Email: rajatvermaa95@gmail.com
#  * GitHub Profile: https://github.com/rajatt95
#  * GitHub Page: https://rajatt95.github.io/
#  * LinkedIn: https://www.linkedin.com/in/rajatt95/
#  * Topmate: https://topmate.io/rajatt95
#  * Telegram: https://t.me/rajatt95
#  * Instagram: https://www.instagram.com/rajattvermaa95/
#  * YouTube: https://www.youtube.com/@rajatt95
#  * WhatsApp Community: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
#  * WhatsApp Channel: https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r
#  */

/***************************************************/

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