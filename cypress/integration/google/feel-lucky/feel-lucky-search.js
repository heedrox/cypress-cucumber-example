import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../../pages/google/google-search-page';
import Browser from '../../../pages/browser';

When(/^Press 'Feel Lucky'$/, () => {
  GoogleSearchPage.pressFeelLucky();
});

Then(/^I am redirected to another domain$/, () => {
  Browser.expect().toBeInOtherDomain();
});
