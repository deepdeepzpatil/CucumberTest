Feature: TestCucumber test FreeCRM Contacts page

Scenario Outline:: FreeCRM Test Contacts Page
	
	Given Launch the browser and hit the URL

	When title of login page is Free CRM

	Then user clicks on login button in Home page
	
	Then User enters "<username>" and "<password>"

	Then user clicks on login button
	
	Then User is on HomePage	
	
	Then user moves to contatcs page 
	
	Then user click on new button
	
	Then User enters contacts detials "<firstname>" and "<lastname>" and "<email>" and "<companyname>"
	
	Then User click on save button
	
	Then browser close
	
	
Examples:

| username				   | password      | firstname   | lastname | email               | companyname |
| deepdeepzpatil@gmail.com | Ayush@143fuck | Kingkong    | king     | hello@mail.com      | erisson     |
| deepdeepzpatil@gmail.com | Ayush@143fuck | harish      | patil    | Harish@mail.com     | Oracle      |
| deepdeepzpatil@gmail.com | Ayush@143fuck | Sunilkumar  | jadhkar  | Sunilkumar@mail.com | Portqii     |
| deepdeepzpatil@gmail.com | Ayush@143fuck | Sharankumar | k        | Sharank@mail.com    | netwokring  |

	