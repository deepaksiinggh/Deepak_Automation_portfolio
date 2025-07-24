interface Project {
	title: string;
	image: string;
	description: string;
	github?: string;
	demo?: string;
	tags: string[];
}

export const projects: Project[] = [
	
	{
		title: "Demo WebShop",
		image: "/images/demowebShop.png",
		description:
			"This is a testing project for an online shopping website called Demo Webshop. I created automation scripts using Selenium WebDriver and TestNG to check if important features like login, adding to cart, and checkout work properly. The project uses a clean and organized structure (Page Object Model) to make the tests easy to understand, update, and reuse. It helps in saving time and improving the quality of the website.",
		github: "https://github.com/deepaksiinggh/Demo-webShop",
		tags: ["Selenium", "Java", "TestNG", "ExtentReport"],
	},
 
  {
		title: "Open-Cart",
		image: "/images/opencart.png",
		description:
			"This is a test automation project for OpenCart, an online shopping platform. I used Selenium WebDriver and TestNG to test features like user login, product search, add to cart, and checkout. The tests are written in a structured way using the Page Object Model, which helps keep the code clean and reusable. This project helps find bugs quickly and ensures the website works smoothly for users.",
		github: "https://github.com/deepaksiinggh/OpenCart_Project",
		tags: ["Selenium", "TestNg", "Java","Docker","ExtentReport"],
	},
	{
	title: "Qspider-Demo",
	image: "/images/qspiderDemo.png",
	description: 
		"• Automated form filling, dropdowns, checkboxes, and radio buttons\n" +
  "• Handled popups, alerts, and file upload operations\n" +
  "• Used WebDriverWait to manage dynamic elements\n" +
  "• Performed scrolling and calendar (date picker) automation\n" +
  "• Covered all basic to tricky Selenium tasks in one project",
	
	github: "https://github.com/deepaksiinggh/Qspider-demo",
	tags: ["Selenium", "TestNg", "Java"],
},

	{
		title: "Password-Generator",
		image: "/images/passwordgenerator.png",
		description:"This automation project tests a password generator tool by verifying that generated passwords match selected options like uppercase, lowercase, numbers, and symbols. It checks password length, clipboard copy, and dynamic UI behavior to ensure correct and secure functionality."
			,
		github: "https://github.com/deepaksiinggh/Password-generator",
		tags: ["Selenium", "TestNg", "Java"],
	},
];
