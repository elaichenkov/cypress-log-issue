const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log() {
          console.log('This will be output to the terminal');

          return null;
        },
      });
    },
  },
});
