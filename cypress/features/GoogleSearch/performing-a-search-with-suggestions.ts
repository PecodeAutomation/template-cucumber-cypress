import { When } from "cypress-cucumber-preprocessor/steps";

import { GOOGLE_PAGE } from "../../page-objects/google.page";

When(/^I start typing (.*) in the search bar$/, function (type_text) {
  GOOGLE_PAGE.getSearchInput().type(type_text);
});

When(/^the search results should contain (.*)$/, function (type_text) {
  GOOGLE_PAGE.getSearchDropdown().should("contain", type_text);
});
