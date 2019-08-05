package TestDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.util;

public class ContactsPageTest {
	WebDriver driver;
	
	@Given("^Launch the browser and hit the URL$")
	public void open_the_chrome_browser_and_Launch_Application() throws Throwable {
		
        System.setProperty("WebDriver.chrome.driver", "D:\\chromedriver.exe");
		
        driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.get("https://freecrm.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	@When("^title of login page is Free CRM$")
	public void Get_the_title_of_pagee() throws Throwable {
		

		String title  =driver.getTitle();
		Assert.assertEquals(title, "Free CRM software for any Business");
		System.out.println(title);

	}
	@Then("^user clicks on login button in Home page$")
	public void Click_on_LoginButton( )throws Throwable{
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.findElement(By.xpath("//span[text()='Log In']")).click();
		
				
	}
	@Then("^User enters \"(.*)\" and \"(.*)\"$") //   \"([^\"]*)\"  we can use this also 
	public void Login_the_crm_Application(String username, String password) throws Throwable{
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);

		
	}
	
	@Then("^user clicks on login button$")
	public void click_on_login_button()throws Throwable{
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();
	}
	@Then("^User is on HomePage$")
	public void Varify_landed_on_main_crm_page()throws Throwable{
		String MainPagetitle  =driver.getTitle();
		 Assert.assertEquals(MainPagetitle, "CRM");
		System.out.println(MainPagetitle);
	
	}
	@Then("^user moves to contatcs page$")
	public void User_moves_to_conatcts_page() throws InterruptedException{
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.findElement(By.xpath("//*[@id=\"main-nav\"]/a[3]/span")).click();
		Thread.sleep(1000);
	}
	
	@Then("^user click on new button$")
	public void user_click_on_New_button() throws InterruptedException {
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[contains(text(),'New')] ")).click();
		Thread.sleep(1000);
	}
	
	@Then("^User enters contacts detials \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
		public void user_Enters_Conatcts_details(String firstname,String lastname,String Email,String companyname) {
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[4]/div/div/div/div/div[1]/input")).sendKeys(Email);
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[2]/div/div/input")).sendKeys(companyname);
		
	}
	
	@Then("^User click on save button$")
	public void user_click_on_Save_button() throws InterruptedException {
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
		Thread.sleep(5000);
				
	}
	@Then("^browser close$")
	public void Close_the_browser()throws Throwable {
		
		driver.close();
	
	
	
}}
