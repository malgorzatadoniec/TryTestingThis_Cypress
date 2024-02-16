const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://trytestingthis.netlify.app/',
    watchForFileChanges: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },
});
