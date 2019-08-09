package TestDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TitleTestClassicCRM {
	WebDriver driver;
@When("^user is opens broswera$")
public void LaunchBRow() {
	
	System.setProperty("WebDriver.chrome.driver", "D:\\chromedriver.exe");

   driver = new ChromeDriver();
driver.manage().window().maximize();
driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
driver.get("https://classic.crmpro.com");
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	
}
	@Then("^User validates Homepagea$")
	public void Titlecheck() {
		String titleStrin = driver.getTitle();
		System.out.println(titleStrin);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", titleStrin);
	
	}
	
	
	
}
