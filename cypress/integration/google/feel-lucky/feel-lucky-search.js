import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../../pages/google/google-search-page';
import Browser from '../../../pages/browser';

Given(/^I'm at Google$/, () => {
  GoogleSearchPage.visit();
});

When(/^I type search word 'github'$/, () => {
  GoogleSearchPage.type('github');
});

When(/^Press 'Feel Lucky'$/, () => {
  GoogleSearchPage.pressFeelLucky();
});

Then(/^I have some results$/, () => {
  Browser.expect().toBeInOtherDomain();
});
