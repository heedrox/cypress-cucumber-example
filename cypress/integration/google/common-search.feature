Feature: Search Google
  Scenario: Common search
    Given I'm at Google
    When I search word 'github'
    Then I have some results
