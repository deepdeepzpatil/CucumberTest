$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/deepz_patil/git/CucumberTest/MavenCucumberTest/feature/taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2404300,
  "status": "passed"
});
formatter.before({
  "duration": 744000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This is First test",
  "description": "",
  "id": "test-tagged-hooks;this-is-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "Taggedhooks.this_is_the_first_step()"
});
formatter.result({
  "duration": 209938200,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_second_step()"
});
formatter.result({
  "duration": 402600,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_third_step()"
});
formatter.result({
  "duration": 497800,
  "status": "passed"
});
formatter.after({
  "duration": 1826700,
  "status": "passed"
});
formatter.after({
  "duration": 887600,
  "status": "passed"
});
formatter.before({
  "duration": 503900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "Taggedhooks.this_is_the_first_step()"
});
formatter.result({
  "duration": 2463800,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_second_step()"
});
formatter.result({
  "duration": 3850700,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_third_step()"
});
formatter.result({
  "duration": 2178200,
  "status": "passed"
});
formatter.after({
  "duration": 381100,
  "status": "passed"
});
formatter.before({
  "duration": 1202200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This is Third test",
  "description": "",
  "id": "test-tagged-hooks;this-is-third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "Taggedhooks.this_is_the_first_step()"
});
formatter.result({
  "duration": 175000,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_second_step()"
});
formatter.result({
  "duration": 126700,
  "status": "passed"
});
formatter.match({
  "location": "Taggedhooks.this_is_the_third_step()"
});
formatter.result({
  "duration": 85700,
  "status": "passed"
});
formatter.after({
  "duration": 232700,
  "status": "passed"
});
});