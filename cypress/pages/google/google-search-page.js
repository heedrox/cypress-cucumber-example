import GoogleResultsPage from './google-results-page';

const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[value="Google Search"]';
const FEEL_LUCKY_BUTTON = `input[value="I'm Feeling Lucky"]`;

class GoogleSearchPage {
  static visit() {
    cy.visit('/');
  }

  static type(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
  }

  static pressSearch() {
    // cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
    //   .click();
    cy.get(SEARCH_BUTTON).first().click();
    return new GoogleResultsPage();
  }

  static pressFeelLucky() {
    cy.get(FEEL_LUCKY_BUTTON).first().click();
  }
}

export default GoogleSearchPage;
