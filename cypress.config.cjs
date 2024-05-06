const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',
        viewportWidth: 1600,
        viewportHeight: 900
    }
});
