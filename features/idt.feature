Feature: IDT Test Project

    Scenario: Display initial page
        Given that I am using a browser
        When I visit "/"
        Then I should see "IDT Test Project" in "h1"

    Scenario: Display list of states
        When I visit "/"
        Then I should see "States" in "h2"
        And There should be "50" "#states div"
