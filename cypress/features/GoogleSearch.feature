Feature: Google Search
  As a user
  I want to perform a search on Google
  So that I can find relevant information


  Scenario Outline: Performing a basic search
    Given I am on the Google homepage
    When I enter <search_text> into the search bar
    Then I should see a list of search results
    And the search results should be related to <search_text>

      Examples:
        | search_text |
        | cats videos |


  Scenario Outline: Performing an image search
    Given I am on the Google homepage
    When I click on the <images_link> link
    And I enter <search_text> into the search bar
    Then I should see a list of image search results

    Examples:
    | images_link | search_text |
    | Images      | cute kittens |


  Scenario Outline: Performing a search with suggestions
    Given I am on the Google homepage
    When I start typing <type_text> in the search bar
    Then the search results should contain <search_text>

    Examples:
      | type_text | search_text |
      | how to    | how to      |