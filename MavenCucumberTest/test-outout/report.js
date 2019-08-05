$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumTests/MavenCucumberTest/feature/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "TestCucumber test FreeCRM Contacts page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": FreeCRM Test Contacts Page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user moves to contatcs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contacts detials \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003ccompanyname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser close",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email",
        "companyname"
      ],
      "line": 30,
      "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;1"
    },
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck",
        "Kingkong",
        "king",
        "hello@mail.com",
        "erisson"
      ],
      "line": 31,
      "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;2"
    },
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck",
        "harish",
        "patil",
        "Harish@mail.com",
        "Oracle"
      ],
      "line": 32,
      "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;3"
    },
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck",
        "Sunilkumar",
        "jadhkar",
        "Sunilkumar@mail.com",
        "Portqii"
      ],
      "line": 33,
      "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;4"
    },
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck",
        "Sharankumar",
        "k",
        "Sharank@mail.com",
        "netwokring"
      ],
      "line": 34,
      "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": ": FreeCRM Test Contacts Page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"deepdeepzpatil@gmail.com\" and \"Ayush@143fuck\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user moves to contatcs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contacts detials \"Kingkong\" and \"king\" and \"hello@mail.com\" and \"erisson\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 9639306800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 212529600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Click_on_LoginButton()"
});
formatter.result({
  "duration": 6247306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepdeepzpatil@gmail.com",
      "offset": 13
    },
    {
      "val": "Ayush@143fuck",
      "offset": 44
    }
  ],
  "location": "ContactsPageTest.Login_the_crm_Application(String,String)"
});
formatter.result({
  "duration": 476879800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.click_on_login_button()"
});
formatter.result({
  "duration": 138643900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 14048900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.User_moves_to_conatcts_page()"
});
formatter.result({
  "duration": 3348522400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_New_button()"
});
formatter.result({
  "duration": 1653987800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kingkong",
      "offset": 30
    },
    {
      "val": "king",
      "offset": 45
    },
    {
      "val": "hello@mail.com",
      "offset": 56
    },
    {
      "val": "erisson",
      "offset": 77
    }
  ],
  "location": "ContactsPageTest.user_Enters_Conatcts_details(String,String,String,String)"
});
formatter.result({
  "duration": 1990183500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_Save_button()"
});
formatter.result({
  "duration": 5471088300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Close_the_browser()"
});
formatter.result({
  "duration": 130741500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": ": FreeCRM Test Contacts Page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"deepdeepzpatil@gmail.com\" and \"Ayush@143fuck\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user moves to contatcs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contacts detials \"harish\" and \"patil\" and \"Harish@mail.com\" and \"Oracle\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 7468005100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 376022200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Click_on_LoginButton()"
});
formatter.result({
  "duration": 7284128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepdeepzpatil@gmail.com",
      "offset": 13
    },
    {
      "val": "Ayush@143fuck",
      "offset": 44
    }
  ],
  "location": "ContactsPageTest.Login_the_crm_Application(String,String)"
});
formatter.result({
  "duration": 426209100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.click_on_login_button()"
});
formatter.result({
  "duration": 85415100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 8914100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.User_moves_to_conatcts_page()"
});
formatter.result({
  "duration": 3130005400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_New_button()"
});
formatter.result({
  "duration": 1258615100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harish",
      "offset": 30
    },
    {
      "val": "patil",
      "offset": 43
    },
    {
      "val": "Harish@mail.com",
      "offset": 55
    },
    {
      "val": "Oracle",
      "offset": 77
    }
  ],
  "location": "ContactsPageTest.user_Enters_Conatcts_details(String,String,String,String)"
});
formatter.result({
  "duration": 1792716900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_Save_button()"
});
formatter.result({
  "duration": 5272766800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Close_the_browser()"
});
formatter.result({
  "duration": 135279400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": ": FreeCRM Test Contacts Page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"deepdeepzpatil@gmail.com\" and \"Ayush@143fuck\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user moves to contatcs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contacts detials \"Sunilkumar\" and \"jadhkar\" and \"Sunilkumar@mail.com\" and \"Portqii\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 6635234200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 449430800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Click_on_LoginButton()"
});
formatter.result({
  "duration": 6427224600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepdeepzpatil@gmail.com",
      "offset": 13
    },
    {
      "val": "Ayush@143fuck",
      "offset": 44
    }
  ],
  "location": "ContactsPageTest.Login_the_crm_Application(String,String)"
});
formatter.result({
  "duration": 471702400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.click_on_login_button()"
});
formatter.result({
  "duration": 81437800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 9680800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.User_moves_to_conatcts_page()"
});
formatter.result({
  "duration": 3069124700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_New_button()"
});
formatter.result({
  "duration": 1585019200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunilkumar",
      "offset": 30
    },
    {
      "val": "jadhkar",
      "offset": 47
    },
    {
      "val": "Sunilkumar@mail.com",
      "offset": 61
    },
    {
      "val": "Portqii",
      "offset": 87
    }
  ],
  "location": "ContactsPageTest.user_Enters_Conatcts_details(String,String,String,String)"
});
formatter.result({
  "duration": 2024728200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_Save_button()"
});
formatter.result({
  "duration": 5285107100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Close_the_browser()"
});
formatter.result({
  "duration": 162660000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": ": FreeCRM Test Contacts Page",
  "description": "",
  "id": "testcucumber-test-freecrm-contacts-page;:-freecrm-test-contacts-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"deepdeepzpatil@gmail.com\" and \"Ayush@143fuck\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user moves to contatcs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contacts detials \"Sharankumar\" and \"k\" and \"Sharank@mail.com\" and \"netwokring\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 6309509300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 459691500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Click_on_LoginButton()"
});
formatter.result({
  "duration": 6938626300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepdeepzpatil@gmail.com",
      "offset": 13
    },
    {
      "val": "Ayush@143fuck",
      "offset": 44
    }
  ],
  "location": "ContactsPageTest.Login_the_crm_Application(String,String)"
});
formatter.result({
  "duration": 405935800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.click_on_login_button()"
});
formatter.result({
  "duration": 93617700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 10174100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.User_moves_to_conatcts_page()"
});
formatter.result({
  "duration": 3406013700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_New_button()"
});
formatter.result({
  "duration": 1546241100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sharankumar",
      "offset": 30
    },
    {
      "val": "k",
      "offset": 48
    },
    {
      "val": "Sharank@mail.com",
      "offset": 56
    },
    {
      "val": "netwokring",
      "offset": 79
    }
  ],
  "location": "ContactsPageTest.user_Enters_Conatcts_details(String,String,String,String)"
});
formatter.result({
  "duration": 1764955500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.user_click_on_Save_button()"
});
formatter.result({
  "duration": 5268750900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageTest.Close_the_browser()"
});
formatter.result({
  "duration": 165829100,
  "status": "passed"
});
});