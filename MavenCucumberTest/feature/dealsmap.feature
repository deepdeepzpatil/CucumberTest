Feature: Deal data creation 


Scenario: Deals FreeCRM Test

Given Launch the browser and hit the URL
When title of login page is Free CRM
Then user clicks on login button in Home page
Then User enters username and password
|  username           |password      |
| deepdeepzpatil@gmail.com | Ayush@143fuck |
Then user clicks on login button
Then User is on HomePages
Then User Clicks on Deals button
Then User Click on New button
Then User Enters deals details
|  Title     |     Probability    | amount | description | 
|DeepakPatil | 1234567 | 100 | adjkkasdhkajs |
|Test Deal1 | 454646 | 656 | gsfsfsfsf |
|Test Deal2 | 543535 | 765 | hfgjdjjetwre |
|Test Deal3 | 57765 | 4535 | zvbbbv |

Then Browser close
