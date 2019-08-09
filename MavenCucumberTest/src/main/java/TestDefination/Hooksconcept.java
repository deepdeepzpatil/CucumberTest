package TestDefination;

import com.sun.jna.platform.win32.SetupApi;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooksconcept {

	@Before
	public void SetupApi() {
		System.out.println("ff launched");
		System.out.println("Hit the url");
	}
	@After
	public void teardown() {
		System.out.println("close the browsers");
	}
	@Given("^Conacts page  test$")
	public void conacts_page_test()  {
	    System.out.println("Conacts page  test");
	    
	}

	@When("^Deals page test$")
	public void deals_page_test()  {
		System.out.println("Deals page test");
	}

	@Then("^user deals is created$")
	public void user_deals_is_created() throws Throwable {
	   System.out.println("userr deals is created");
	}

	@Given("^user is on mail page$")
	public void user_is_on_mail_page() throws Throwable {
	  System.out.println("user is on mail page");
	}

	@When("^user fills the mail form$")
	public void user_fills_the_mail_form() throws Throwable {
	    System.out.println("user fills the mail");;
	}

	@Then("^mail is created$")
	public void mail_is_created() throws Throwable {
	   System.out.println("mail is created");
	}


	
	
	
}
