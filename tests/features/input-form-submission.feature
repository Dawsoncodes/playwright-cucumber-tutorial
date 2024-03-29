@demo
Feature: Input Form Demo Submission on LambdaTest Selenium Playground
  As a user, I want to submit the input form so that I can see the confirmation message.

  Scenario: Successful form submission
    Given I navigate to the Input Form Demo page on LambdaTest Selenium Playground
    When I fill out the form with valid data
    And I click the submit button
    Then I should see a confirmation message saying "Thanks for contacting us, we will get back to you shortly."
