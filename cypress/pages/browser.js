class Browser {
  static expect() {
    return {
      toBeInOtherDomain: () => cy.url().should('not.include', 'google'),
    };
  }
}

export default Browser;
