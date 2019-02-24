// Some async example that waits for 5 secs
// This could be a cy.request or some node async stuff
const pluginExecuteCommand = command =>
// eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${command} execution simulated after 10 secs`);
    }, 5000);
  });

module.exports = pluginExecuteCommand;
