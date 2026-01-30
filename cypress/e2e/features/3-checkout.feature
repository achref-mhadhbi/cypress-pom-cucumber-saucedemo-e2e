Feature: Checkout Process

  Scenario: Complete a purchase from start to finish
    Given I am logged in with valid credentials
    And I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    When I navigate to the shopping cart
    And I click on the checkout button
    And I fill in the shipping information with "Achref", "Mhadhbi" and "12345"
    And I click on the continue button
    And I click on the finish button
    Then I should see the success message "Thank you for your order!"