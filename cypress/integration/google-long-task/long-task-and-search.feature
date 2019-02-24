Feature: Search Google
  Scenario: Common search
    Given I'm at Google
    And I execute a long task in my database
    When I type search word 'github'
    And Press 'Search'
    Then I have some results
