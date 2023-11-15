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

// Import the `defineConfig` function from Cypress
const { defineConfig } = require("cypress");

// Export the Cypress configuration using the defineConfig function
module.exports = defineConfig({

  // Setup Node events for Cypress (in this case, use the mochawesome reporter plugin)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
