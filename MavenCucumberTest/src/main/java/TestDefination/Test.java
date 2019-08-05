package TestDefination;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Test {

//WebDriver driver;
//	
//	@Given("^Launch the browser and hit the URL$")
//	public void open_the_chrome_browser_and_Launch_Application() throws Throwable {
//		
//        System.setProperty("WebDriver.chrome.driver", "D:\\chromedriver.exe");
//		
//        driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		
//		driver.get("https://freecrm.com/");
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		
//		
//	}
//	@When("^title of login page is Free CRM$")
//	public void Get_the_title_of_pagee() throws Throwable {
//		
//
//		String title  =driver.getTitle();
//		Assert.assertEquals(title, "Free CRM software for any Business");
//		System.out.println(title);
//
//	}
//	@Then("^user clicks on login button in Home page$")
//	public void Click_on_LoginButton( )throws Throwable{
//		
//		driver.findElement(By.xpath("//span[text()='Log In']")).click();
//		 driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.HOURS);
//		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//				
//	}
//	@Then("^User enters \"(.*)\" and \"(.*)\"$") //   \"([^\"]*)\"  we can use this also 
//	public void Login_the_Application(String username, String password) throws Throwable{
//		driver.findElement(By.name("email")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//
//		
//	}
//	
//	@Then("^user clicks on login button$")
//	public void click_on_login_button()throws Throwable{
//		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();
//	}
//	@And("^User is on HomePage$")
//	public void Varify_landed_on_main_page()throws Throwable{
//		String MainPagetitle  =driver.getTitle();
//		 Assert.assertEquals(MainPagetitle, "CRM");
//		System.out.println(MainPagetitle);
//	
//		
//	}
//	@And("^Browser should closed$")
//	public void Browser_closing()throws Throwable {
//		Thread.sleep(10000);
//		driver.close();
//		
//	}
//	
//	
}

	
