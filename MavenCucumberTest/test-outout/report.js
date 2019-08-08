$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/deepz_patil/git/CucumberTest/MavenCucumberTest/feature/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Deals FreeCRM Test",
  "description": "",
  "id": "deal-data-creation;deals-freecrm-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Launch the browser and hit the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button in Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "deepdeepzpatil@gmail.com",
        "Ayush@143fuck"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on HomePages",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on Deals button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User Click on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enters deals details",
  "rows": [
    {
      "cells": [
        "Title",
        "Probability",
        "amount",
        "description"
      ],
      "line": 17
    },
    {
      "cells": [
        "DeepakPatil",
        "1234567",
        "100",
        "adjkkasdhkajs"
      ],
      "line": 18
    },
    {
      "cells": [
        "Test Deal1",
        "454646",
        "656",
        "gsfsfsfsf"
      ],
      "line": 19
    },
    {
      "cells": [
        "Test Deal2",
        "543535",
        "765",
        "hfgjdjjetwre"
      ],
      "line": 20
    },
    {
      "cells": [
        "Test Deal3",
        "57765",
        "4535",
        "zvbbbv"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Browser close",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepwithmapdefination.open_the_chrome_browser_and_Launch_Application()"
});
formatter.result({
  "duration": 10683275000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.Get_the_title_of_pagee()"
});
formatter.result({
  "duration": 16093400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.Click_on_LoginButton()"
});
formatter.result({
  "duration": 6030598900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.Login_the_crm_Application(DataTable)"
});
formatter.result({
  "duration": 451344400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.click_on_login_button()"
});
formatter.result({
  "duration": 101912400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.Varify_landed_on_main_crm_page()"
});
formatter.result({
  "duration": 16361900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.Yser_clicks_on_deals_button()"
});
formatter.result({
  "duration": 5202195000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.User_Click_on_New_button()"
});
formatter.result({
  "duration": 387114600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.User_eneters_deals_details(DataTable)"
});
formatter.result({
  "duration": 64867921800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithmapdefination.close_the_browser()"
});
formatter.result({
  "duration": 209998700,
  "status": "passed"
});
});