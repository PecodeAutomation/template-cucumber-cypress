// Import Cypress commands and Cucumber steps
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import { GOOGLE_PAGE } from "../../page-objects/google.page";

Given(/^I am on the Google homepage$/, function () {
  cy.visit("https://www.google.com");
});

When(/^I enter (.*) into the search bar$/, function (search_text) {
  // Add code to enter the video type into the search bar
  GOOGLE_PAGE.getSearchInput().type(`${search_text}{enter}`);
});

Then(/^I should see a list of search results$/, function () {
  // Add assertions to check if search results are displayed
  GOOGLE_PAGE.getSearchResult().should("be.visible");
});

And(/^the search results should be related to (.*)$/, function (search_text) {
  // Add assertions to check if search results are relevant to the video type
  GOOGLE_PAGE.getSearchResult().should("contain", search_text);
});
