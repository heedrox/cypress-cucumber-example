import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../../pages/google/google-search-page';
import GoogleResultsPage from '../../../pages/google/google-results-page';

When(/^Press 'Search'$/, () => {
  GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  GoogleResultsPage.expect().toHaveResults();
});
