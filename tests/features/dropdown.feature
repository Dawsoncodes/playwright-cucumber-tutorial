@dropdown
Feature: Dropdown Feature
 
  Scenario: User can select a day from the dropdown
    Given I am on the Select Dropdown Demo page
    When I select "Friday" from the dropdown
    Then "Friday" should be shown as the selected day

  Scenario: User can select first option from the select option
    Given I am on the Select Dropdown Demo page
    When I select "New Jersey" from the select option
    And I click on the "First Selected" button
    Then "New Jersey" should be shown as the first selected option

  Scenario: User can select Last option from the select option
    Given I am on the Select Dropdown Demo page
    When I select "Washington" from the select option
    And I click on the "Last Selected" button
    Then "Washington" should be shown as the last selected option

