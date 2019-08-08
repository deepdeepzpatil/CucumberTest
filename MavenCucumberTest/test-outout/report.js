$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/deepz_patil/git/CucumberTest/MavenCucumberTest/feature/deals.feature");
formatter.feature({
  "line": 1,
  "name": "TestCucumber FreeCRM DealsTest test",
  "description": "",
  "id": "testcucumber-freecrm-dealstest-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Deals FreeCRM Test",
  "description": "",
  "id": "testcucumber-freecrm-dealstest-test;deals-freecrm-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on HomePages",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Deals button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Click on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Enters deals details",
  "rows": [
    {
      "cells": [
        "DeepakPatil",
        "1234567",
        "100",
        "adjkkasdhkajs"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPageTest.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 11490086900,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 20271800,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.Click_on_LoginButton()"
});
formatter.result({
  "duration": 7081081000,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.Login_the_crm_Application(DataTable)"
});
formatter.result({
  "duration": 467122500,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.click_on_login_button()"
});
formatter.result({
  "duration": 97703400,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 12373200,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.Yser_clicks_on_deals_button()"
});
formatter.result({
  "duration": 5264677800,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.User_Click_on_New_button()"
});
formatter.result({
  "duration": 464164600,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.User_eneters_deals_details(DataTable)"
});
formatter.result({
  "duration": 1177103700,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.user_clicks_on_Save_Button()"
});
formatter.result({
  "duration": 5094060100,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.close_the_browser()"
});
formatter.result({
  "duration": 250977200,
  "status": "passed"
});
});