$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignUpUser.feature");
formatter.feature({
  "line": 2,
  "name": "Sign Up Functionality in elearningm1 Website",
  "description": "",
  "id": "sign-up-functionality-in-elearningm1-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Add all mandatory fields to create an User",
  "description": "",
  "id": "sign-up-functionality-in-elearningm1-website;add-all-mandatory-fields-to-create-an-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter all Mandatory fields \"\u003cfirstname\u003e\" , \"\u003cLastName\u003e\", \"\u003cEmail\u003e\", \"\u003cUsername\u003e\", \"\u003cPassword\u003e\", \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration Home Page will appear with message Dear \"\u003cfirstname\u003e\", \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on Profile Icon and Validate the Email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on Compose Email Icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Enters all Mandatory Fields \"\u003cSendTo\u003e\" , \"\u003cSubject\u003e\", \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Message should be sent Successfully with success message having \"\u003cSendTo\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-up-functionality-in-elearningm1-website;add-all-mandatory-fields-to-create-an-user;",
  "rows": [
    {
      "cells": [
        "firstname",
        "LastName",
        "Email",
        "Username",
        "Password",
        "ConfirmPassword",
        "SendTo",
        "Subject",
        "Message"
      ],
      "line": 17,
      "id": "sign-up-functionality-in-elearningm1-website;add-all-mandatory-fields-to-create-an-user;;1"
    },
    {
      "cells": [
        "Yash123",
        "Murthannagari",
        "xyz@gmail.com",
        "123abc11",
        "yashashwini",
        "yashashwini",
        "abcd123",
        "Imp",
        "Hello There"
      ],
      "line": 18,
      "id": "sign-up-functionality-in-elearningm1-website;add-all-mandatory-fields-to-create-an-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2756806500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add all mandatory fields to create an User",
  "description": "",
  "id": "sign-up-functionality-in-elearningm1-website;add-all-mandatory-fields-to-create-an-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter all Mandatory fields \"Yash123\" , \"Murthannagari\", \"xyz@gmail.com\", \"123abc11\", \"yashashwini\", \"yashashwini\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration Home Page will appear with message Dear \"Yash123\", \"Murthannagari\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on Profile Icon and Validate the Email \"xyz@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on Compose Email Icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Enters all Mandatory Fields \"abcd123\" , \"Imp\", \"Hello There\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Message should be sent Successfully with success message having \"abcd123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 5361928900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_SignUp()"
});
formatter.result({
  "duration": 4933157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yash123",
      "offset": 28
    },
    {
      "val": "Murthannagari",
      "offset": 40
    },
    {
      "val": "xyz@gmail.com",
      "offset": 57
    },
    {
      "val": "123abc11",
      "offset": 74
    },
    {
      "val": "yashashwini",
      "offset": 86
    },
    {
      "val": "yashashwini",
      "offset": 101
    }
  ],
  "location": "stepDef.enter_all_Mandatory_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6726368700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.click_on_Register()"
});
formatter.result({
  "duration": 5959598500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yash123",
      "offset": 54
    },
    {
      "val": "Murthannagari",
      "offset": 65
    }
  ],
  "location": "stepDef.registration_Home_Page_will_appear_with_message_Dear(String,String)"
});
formatter.result({
  "duration": 3055423500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 52
    }
  ],
  "location": "stepDef.user_Clicks_on_Profile_Icon_and_Validate_the_Email(String)"
});
formatter.result({
  "duration": 6964760600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_Clicks_on_Compose_Email_Icon()"
});
formatter.result({
  "duration": 6771529700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 34
    },
    {
      "val": "Imp",
      "offset": 46
    },
    {
      "val": "Hello There",
      "offset": 53
    }
  ],
  "location": "stepDef.user_Enters_all_Mandatory_Fields(String,String,String)"
});
formatter.result({
  "duration": 10145125200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_Clicks_on_Send_Message()"
});
formatter.result({
  "duration": 2909317100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 65
    }
  ],
  "location": "stepDef.message_should_be_sent_Successfully_with_success_message_having(String)"
});
formatter.result({
  "duration": 43947300,
  "status": "passed"
});
formatter.after({
  "duration": 116600,
  "status": "passed"
});
});