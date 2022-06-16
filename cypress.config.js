const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'www.blcknives.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family == 'chromium') {
          launchOptions.args.push('--auto-open-devtools-for-tabs')
          return launchOptions;
        }

      })

      // implement node event listeners here
    },
  },
});
