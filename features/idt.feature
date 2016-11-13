Feature: IDT Test Project

    Scenario: Display initial page
        Given that I am using a browser
        When I visit "/"
        Then I should see "IDT Test Project" in "h1"
        And I should see "States" in "h2"
        And I wait for "#states_done"
        And There should be "51" "#states1 div"

    Scenario: Click on one of the states
        When I click "#state4"
        Then I should see "California" in "h3"
        And I should see "38332521" in ".population"
        And I should see "58" in ".counties"
        And There should be "58" ".counties-list div"

    Scenario: Double click on one of the states
        When I double click "#state6"
