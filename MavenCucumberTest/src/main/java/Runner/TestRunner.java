package Runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"C:\\Users\\deepz_patil\\git\\CucumberTest\\MavenCucumberTest\\feature\\dealsmap.feature"},
						glue = {"TestDefination"} ,
						format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
						,dryRun = false,//cehck the maping is proper between feture file and test defination file 
						monochrome = true,
						strict = true)//it wil check if any step is not defined in step defination 
public class TestRunner {

}



