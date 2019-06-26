# Cypress - Cucumber Example

## Installing

- Clone repo
- Do `git submodule init`
- Do `git submodule update`
- npm install
 
Submodules where added as 
```sh
git submodule add git@github.com:jmarti-theinit/cypress-cucumber-examples-features.git gherkin-features
```

Use your own repo doing:

```sh
git submodule deinit gherkin-features
git submodule add (YOUR_REPO_URL) gherkin-features
git add --all
git commit -m "Change repo url"
```

## Warning

In cypress.json you can check the "chromeWebSecurity" property disabled. Please, do not use it
unless you know what it does. This is done right now to make the "feel-lucky" feature to work.

