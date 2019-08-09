package TestDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Taggedhooks {
	//global hooks
//	@Before
//	public void SetupApi() {
//		System.out.println("ff launched");
//		System.out.println("Hit the url");
//	}
//	@After
//	public void teardown() {
//		System.out.println("close the browsers");
//		
//	}
	//Local 
	@Before("@First")
	public void BeforeFirst() {
		System.out.println("before only the first scenario");
		
	}
	@After("@First")
	public void afterfirst() {
		System.out.println("after the url");
		
	}
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
	 System.out.println("this is the first step");
	
	}

	@When("^this is the second step$")
	public void this_is_the_second_step()  {
		 System.out.println("this is the second step");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
		 System.out.println("this is the third step");
	}

	
	
	
	
	
}
