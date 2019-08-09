$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/deepz_patil/git/CucumberTest/MavenCucumberTest/feature/TitileTest.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test1",
  "description": "",
  "id": "free-crm-application-test1",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1399500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate Free CRM Home page Test1",
  "description": "",
  "id": "free-crm-application-test1;validate-free-crm-home-page-test1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is opens broswera",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User validates Homepagea",
  "keyword": "Then "
});
formatter.match({
  "location": "TitleTestClassicCRM.LaunchBRow()"
});
formatter.result({
  "duration": 12642822900,
  "status": "passed"
});
formatter.match({
  "location": "TitleTestClassicCRM.Titlecheck()"
});
formatter.result({
  "duration": 17133100,
  "status": "passed"
});
formatter.after({
  "duration": 86300,
  "status": "passed"
});
});