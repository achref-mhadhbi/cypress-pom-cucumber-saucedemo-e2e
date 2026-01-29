Feature: Cart Management

  Scenario: Add products to cart and verify badge
    Given I am logged in with valid credentials
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart badge should show 2 items
    And I should see these products in the cart:
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |