package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.*;
import junit.framework.Assert;
import Util.hooks;

public class stepDef {

	WebDriver driver = hooks.driver;

	@Given("^user should be on the main page$")
	public void user_should_be_on_the_main_page() throws Throwable {
		driver.get("http://elearningm1.upskills.in/");
		driver.manage().window().maximize();

	}

	@When("^user clicks on SignUp$")
	public void user_clicks_on_SignUp() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.linkText("Sign up!")).click();

	}

	@When("^Enter all Mandatory fields \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void enter_all_Mandatory_fields(String firstname, String LastName, String Email, String Username,
			String Password, String ConfirmPassword) throws Throwable {

		Thread.sleep(3000);
		// driver.findElement(By.xpath("/html//div[@id='status-group']/div[@class='col-sm-8']/div[2]/label/input[@name='status']"));
		driver.findElement(By.name("firstname")).sendKeys(firstname);
		driver.findElement(By.id("registration_lastname")).sendKeys(LastName);
		driver.findElement(By.id("registration_email")).sendKeys(Email);
		driver.findElement(By.id("username")).sendKeys(Username);
		driver.findElement(By.id("pass1")).sendKeys(Password);
		driver.findElement(By.id("pass2")).sendKeys(ConfirmPassword);
		Thread.sleep(3000);

	}

	@When("^Click on Register$")
	public void click_on_Register() throws Throwable {
		driver.findElement(By.id("registration_submit")).click();
		Thread.sleep(3000);
	}

	@Then("^Registration Home Page will appear with message Dear \"([^\"]*)\", \"([^\"]*)\"$")
	public void registration_Home_Page_will_appear_with_message_Dear(String firstname, String LastName)
			throws Throwable {

		/*
		 * Thread.sleep(3000); WebElement message =
		 * driver.findElement(By.xpath("//p[@class='name']")); String
		 * ActualMsg=message.getText();
		 * 
		 * String ExpectedMsg ="Dear "+"firstname "+"LastName";
		 * System.out.println(ActualMsg); System.out.println(ExpectedMsg);
		 * 
		 * Assert.assertEquals(ExpectedMsg.trim(),ActualMsg.trim());
		 */

		if (driver.getPageSource().contains(firstname) & driver.getPageSource().contains(LastName)) {
			System.out.println("Registration Successful");
			driver.manage().window().maximize();
			Thread.sleep(3000);
		} else {
			System.out.println("Registration Failed");
		}

	}

	@Then("^User Clicks on Profile Icon and Validate the Email \"([^\"]*)\"$")
	public void user_Clicks_on_Profile_Icon_and_Validate_the_Email(String Email) throws Throwable {

		driver.findElement(By.linkText("Homepage")).click();
		Thread.sleep(5000);
		if (driver.getPageSource().contains(Email)) {
			System.out.println("Email Validation Successfull");
		} else {
			System.out.println("Email Validation Failed");
		}
	}

	@Then("^User Clicks on Compose Email Icon$")
	public void user_Clicks_on_Compose_Email_Icon() throws Throwable {

		driver.findElement(By.linkText("Compose")).click();
		Thread.sleep(3000);
	}

	@Then("^User Enters all Mandatory Fields \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_Enters_all_Mandatory_Fields(String SendTo, String Subject, String Message) throws Throwable {

		driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(SendTo);
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id='select2-compose_message_users-results']/li[1]")).click();
		driver.findElement(By.id("compose_message_title")).sendKeys(Subject);
		Thread.sleep(1500);
		driver.findElement(By.xpath("//label[contains(text(),'Message')]//following::iframe[1]")).sendKeys(Message);
		driver.findElement(By.xpath("//input[@id='compose_message_title']")).sendKeys(Subject);

		Thread.sleep(3000);

	}

	@Then("^User Clicks on Send Message$")
	public void user_Clicks_on_Send_Message() throws Throwable {
		driver.findElement(By.xpath("//button[@id='compose_message_compose']")).click();

	}

	@Then("^Message should be sent Successfully with success message having \"([^\"]*)\"$")
	public void message_should_be_sent_Successfully_with_success_message_having(String SendTo) throws Throwable {

		if (driver.getPageSource().contains(SendTo)) {
			System.out.println("Message sent");
		} else {
			System.out.println("Message not sent");
		}
	}

}
