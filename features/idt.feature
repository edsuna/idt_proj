Feature: IDT Test Project

    Scenario: Display initial page
        Given that I am using a browser
        When I visit "/"
        Then I should see "IDT Test Project" in "h1"
        And I should see "States" in "h2"
        And I wait for "#states_done"
        And There should be "51" "#states1 div"
        And I should see "Another List" in "h2"
        And There should be "51" "#states2 div"

    Scenario: Click on one of the states
        When I click "#states1_4"
        Then I should see "California" in "#states1_details h3"
        And I should see "38332521" in "#states1_details .population"
        And I should see "58" in "#states1_details .counties"
        And There should be "58" "#states1_details .counties-list div"

    Scenario: Double click on one of the states
        When I double click "#states1_6"
        Then There should be "1" ".state-selected"

    Scenario: Filter states
        When I enter "al" into "#states2_filter"
        Then There should be "3" "#states2 div"

    Scenario: Click on filtered list
        When I click "#states2_2"
        Then I should see "California" in "#states2_details h3"
        And I should see "38332521" in "#states2_details .population"
        And I should see "58" in "#states2_details .counties"
        And There should be "58" "#states2_details .counties-list div"

    Scenario: Show mismatch
        When I click "#states1_15"
        And I wait "1" seconds
        Then There should be "2" ".population-mismatch"
