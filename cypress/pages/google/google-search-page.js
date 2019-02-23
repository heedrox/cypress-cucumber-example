import GoogleResultsPage from './google-results-page';

const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[type=submit]';
const SEARCH_TEXT = 'Buscar';

class GoogleSearchPage {
  static visit() {
    cy.clearLocalStorage();
    cy.visit('/');
  }

  static search(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
    cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
      .click();
    return new GoogleResultsPage();
  }
}

export default GoogleSearchPage;
