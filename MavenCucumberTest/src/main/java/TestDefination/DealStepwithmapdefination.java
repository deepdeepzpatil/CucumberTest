package TestDefination;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.gargoylesoftware.htmlunit.javascript.host.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.util;

public class DealStepwithmapdefination {
	WebDriver driver;

	@Given("^Launch the browser and hit the URL$")
	
	public void open_the_chrome_browser_and_Launch_Application() throws Throwable {

		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.get("https://freecrm.com/");
	}

	@When("^title of login page is Free CRM$")
	public void Get_the_title_of_pagee() throws Throwable {

		String title = driver.getTitle();
		Assert.assertEquals(title, "Free CRM software for any Business");
		System.out.println(title);

	}

	@Then("^user clicks on login button in Home page$")
	public void Click_on_LoginButton() throws Throwable {
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.findElement(By.xpath("//span[text()='Log In']")).click();

	}

	@Then("^User enters username and password$") // \"([^\"]*)\" we can use this also
	public void Login_the_crm_Application(DataTable credentials) throws Throwable {
	
		for (java.util.Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);

			driver.findElement(By.name("email")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}

		

	}

	@Then("^user clicks on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();
	}

	@Then("^User is on HomePages$")
	public void Varify_landed_on_main_crm_page() throws Throwable {
		String MainPagetitle = driver.getTitle();
		Assert.assertEquals(MainPagetitle, "CRM");
		System.out.println(MainPagetitle);
	}

	@Then("^User Clicks on Deals button$")
	public void Yser_clicks_on_deals_button() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		
	}

	@Then("^User Click on New button$")
	public void User_Click_on_New_button() {

		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);

	}

	@Then("^User Enters deals details$")
	public void User_eneters_deals_details(DataTable dealData) throws InterruptedException {
		for (java.util.Map<String, String> data : dealData.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//input[@name='title']")).sendKeys(data.get("Title"));
			driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(data.get("Probability"));
			driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(data.get("amount"));
			driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[5]/div/div/textarea")).sendKeys(data.get("description"));
			driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			
			driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);	
			
			Thread.sleep(5000);
				
			driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		}
		
	}
	
	
	@Then("^Browser close$")
	public void close_the_browser() {
		driver.close();
	}
}
