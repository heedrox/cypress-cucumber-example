import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../pages/google/google-search-page';

Given(/^I'm at Google$/, () => {
  GoogleSearchPage.visit();
});

When(/^I type search word 'github'$/, () => {
  GoogleSearchPage.type('github');
});

