@featuretag
Feature: Sign Up Functionality in elearningm1 Website

  Scenario Outline: Add all mandatory fields to create an User
    Given user should be on the main page
    When user clicks on SignUp
    And Enter all Mandatory fields "<firstname>" , "<LastName>", "<Email>", "<Username>", "<Password>", "<ConfirmPassword>"
    And Click on Register
    Then Registration Home Page will appear with message Dear "<firstname>", "<LastName>"
    And User Clicks on Profile Icon and Validate the Email "<Email>"
    And User Clicks on Compose Email Icon
    And User Enters all Mandatory Fields "<SendTo>" , "<Subject>", "<Message>"
    And User Clicks on Send Message
    Then Message should be sent Successfully with success message having "<SendTo>"

    Examples: 
      | firstname | LastName      | Email         | Username | Password    | ConfirmPassword | SendTo  | Subject | Message     |
      | Yash123   | Murthannagari | xyz@gmail.com | 123abc11 | yashashwini | yashashwini     | abcd123 | Imp     | Hello There |
