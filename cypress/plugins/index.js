// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if (config.env.ENV_RUN && config.env.ENV_RUN == 'dev') {
    on('before:browser:launch', (browser, launchOptions) => {

      if (browser.name === 'chrome') {
        launchOptions.args.push('--remote-debugging-port=9222')

        return launchOptions
      }

    })
  }
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

// if you have webpack or other ts preprocessors
// just add another exports section with allure writer:

module.exports = (on) => {
    on('file:preprocessor', webpackPreprocessor);
};

module.exports = (on, config) => {
    allureWriter(on, config);
};
