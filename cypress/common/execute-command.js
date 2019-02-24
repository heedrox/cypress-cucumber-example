const executeCommand = (command) => {
  cy.task('pluginExecuteCommand', command);
};
export default executeCommand;
