$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BackgroundChangePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validate background color change functionality",
  "description": "",
  "id": "validate-background-color-change-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4775553800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sky Blue Background",
  "description": "",
  "id": "validate-background-color-change-functionality;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@blueBackground"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the \"Set SkyBlue Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "BackgroundChangePageSteps.button_exists(String)"
});
formatter.result({
  "duration": 291402000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 16
    }
  ],
  "location": "BackgroundChangePageSteps.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 215340600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundChangePageSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 770500900,
  "status": "passed"
});
formatter.after({
  "duration": 791881000,
  "status": "passed"
});
formatter.before({
  "duration": 3020591000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "White Background Change",
  "description": "",
  "id": "validate-background-color-change-functionality;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@whiteBackground"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "\"Set White Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"Set White Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 1
    }
  ],
  "location": "BackgroundChangePageSteps.button_exists(String)"
});
formatter.result({
  "duration": 65338700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 16
    }
  ],
  "location": "BackgroundChangePageSteps.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 85358100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundChangePageSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 724986000,
  "status": "passed"
});
formatter.after({
  "duration": 787977500,
  "status": "passed"
});
});