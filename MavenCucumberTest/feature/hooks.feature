Feature: TestCucumber FreeCRM DealsTest Hooks Concepts

Scenario: Deals FreeCRM Test

Given Conacts page  test
When Deals page test
Then user deals is created


Scenario: Deals FreeCRM Test

Given Conacts page  test
When Deals page test
Then user deals is created


Scenario Outline: free crm create mail test 
	Given user is on mail page 
	When user fills the mail form 
	Then mail is created 
	Examples: 
		|mail1|
	|mail2|
		|mail3|	
	