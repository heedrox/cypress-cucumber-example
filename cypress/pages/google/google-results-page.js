const RESULT_LINK = 'h3';

class GoogleResultsPage {
  static expect() {
    return {
      toHaveResults: () => {
        cy.get(RESULT_LINK).its('length').then((length) => {
          expect(length).to.be.greaterThan(5);
        });
      },
    };
  }
}

export default GoogleResultsPage;
