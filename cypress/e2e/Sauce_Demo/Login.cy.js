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

/// <reference types="cypress" />

// Importing page objects and components
import loginPage from '../../support/pages/LoginPage'
import productsPage from '../../support/pages/ProductsPage'
import header from '../../support/pages/components/Header'
import footer from '../../support/pages/components/Footer'


/**
 * Test Suite for Sauce Demo Login
 */
describe('Sauce Demo - [LOGIN]', () => { 

  // Set up tasks to be performed before each test
  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test
    cy.visit('https://www.saucedemo.com/')
  })

  /**
   * Test Case: Login with valid credentials
   */
  it('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.', () => {
    
    // Perform login using the loginPage object
    loginPage.loginToApplication("standard_user", "secret_sauce")

    // Assertions for an successful login 

    // Verify successful login on the Products Page
    productsPage.elements.heading_products().should('have.text', 'Products')

    // Verify common components on the page
    header.elements.logo_application().should('have.text', 'Swag Labs')
    footer.elements.msg_copyright().should('include.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

  })
  
})
