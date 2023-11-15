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
#  * WhatsApp: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
#  */

/***************************************************/

/// <reference types="cypress" />

// Importing page objects
import loginPage from '../../support/pages/LoginPage'
import productsPage from '../../support/pages/ProductsPage'


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

  })
  
})
