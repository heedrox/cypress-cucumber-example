Feature: Feel Lucky
  Scenario: Feel Lucky
    Given I'm at Google
    When I type search word 'github'
    And Press 'Feel Lucky'
    Then I am redirected to another domain
