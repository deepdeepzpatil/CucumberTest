package TestDefination;

import java.awt.List;
import java.security.PublicKey;
import java.util.concurrent.TimeUnit;

import javax.xml.xpath.XPath;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.util;

public class DealsPageTest {
	
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
	@Then("^User enters username and password$") //   \"([^\"]*)\"  we can use this also 
	public void Login_the_crm_Application(DataTable Credentials) throws Throwable{
		java.util.List<java.util.List<String>> data =Credentials.raw();
		
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	
	
	}
	@Then("^user clicks on login button$")
	public void click_on_login_button()throws Throwable{
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();	
}
	@Then("^User is on HomePages$")
	public void Varify_landed_on_main_crm_page()throws Throwable{
		String MainPagetitle  =driver.getTitle();
		 Assert.assertEquals(MainPagetitle, "CRM");
		System.out.println(MainPagetitle);
}
	@Then("^Then User click on Deals Button$")
	public void Yser_clicks_on_deals_button() {
		
		driver.findElement(By.xpath("//span[contains(text(),'Deals')] ")).click();
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
	}
	
	@Then("^User Click on New button$")
	public void User_Click_on_New_button() {
		
		driver.findElement(By.xpath("//button[contains(text(),'New')] ")).click();
		driver.manage().timeouts().pageLoadTimeout(util.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
	}
	@Then("^User Enters deals details$")
	public void User_eneters_deals_details(DataTable Credentials) {
		java.util.List<java.util.List<String>> data =Credentials.raw();
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(data.get(0).get(1));
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(data.get(0).get(2));
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[5]/div/div/textarea")).sendKeys(data.get(0).get(3));
	}
}
