import { Then, When } from "cypress-cucumber-preprocessor/steps";

import { GOOGLE_PAGE } from "../../page-objects/google.page";

When(/^I click on the (.*) link$/, () => {
  // Click on the "Images" link
  GOOGLE_PAGE.getImageButton().click();
});

Then(/^I should see a list of image search results$/, () => {
  // Assert that image search results are displayed
  GOOGLE_PAGE.getImageSearchResults().should("be.visible");
});
