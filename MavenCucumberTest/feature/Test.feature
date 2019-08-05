Feature: TestCucumber test

#without example keyword

	#Given Launch the browser and hit the URL

	#When title of login page is Free CRM

	#Then user clicks on login button in Home page
	
	#Then User enters "deepdeepzpatil@gmail.com" and "Ayush@143fuck"

	#Then user clicks on login button

	#And User is on HomePage	
	
	#And Browser should closed
	
	
	#using example keyword
	Scenario Outline:: TestCucumber tetsing
	
	Given Launch the browser and hit the URL

	When title of login page is Free CRM

	Then user clicks on login button in Home page
	
	Then User enters "<username>" and "<password>"

	Then user clicks on login button
	
	And User is on HomePage	
	
	And Browser should closed

Examples:

| username | password |
| deepdeepzpatil@gmail.com | Ayush@143fuck |
| hellother@gmail.com | Ayush@143fuck |
	