/// <reference types="cypress" />

const CUCUMBER = require("cypress-cucumber-preprocessor").default;
const SQL = require("mssql");
/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  // XXX: because cucumber by default can`t work with typescript
  const options = {
    typescript: require.resolve("typescript")
  };

  on("task", {
    async queryMSSQL(requestQuery) {
      const query = await SQL.query(requestQuery);
      await SQL.close();
      return query;
    }
  });

  on("file:preprocessor", CUCUMBER(options));

  return config;
};
