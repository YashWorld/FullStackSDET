package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
	features = "src/test/java/features",
	glue = {"StepDefinition","Util"},
	//dryRun = true,
	monochrome = true,
	plugin = {"pretty","html:target/reports/","json:target/reports/jsronresult.json","junit:target/reports/xmlreport.xml"}
	)

public class testRunner {

}
