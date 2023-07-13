export class GooglePage {
  getSearchInput() {
    return cy.get('textarea[name="q"]');
  }

  getSearchResult() {
    return cy.get("#search");
  }

  getImageButton() {
    return cy.get('[data-pid="2"]');
  }

  getImageSearchResults() {
    return cy.get('[role="main"]');
  }

  getSearchDropdown() {
    return cy.get('[role="presentation"]');
  }
}

export const GOOGLE_PAGE = new GooglePage();
