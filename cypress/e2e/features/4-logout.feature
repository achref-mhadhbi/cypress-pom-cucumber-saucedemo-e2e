Feature: Logout Functionality

  Scenario: Successful logout from the burger menu
    Given I am logged in with valid credentials
    When I click on the burger menu
    And I click on the logout link
    Then I should be redirected to the login page