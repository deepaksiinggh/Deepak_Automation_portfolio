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
		image: "/images/prompt.PNG",
		description:
			"This is a testing project for an online shopping website called Demo Webshop. I created automation scripts using Selenium WebDriver and TestNG to check if important features like login, adding to cart, and checkout work properly. The project uses a clean and organized structure (Page Object Model) to make the tests easy to understand, update, and reuse. It helps in saving time and improving the quality of the website.",
		github: "https://github.com/deepaksiinggh/Demo-webShop",
		tags: ["Selenium", "Java", "TestNG", "ExtentReport"],
	},
 
  {
		title: "Open-Cart",
		image: "/images/nextgen.PNG",
		description:
			"This is a test automation project for OpenCart, an online shopping platform. I used Selenium WebDriver and TestNG to test features like user login, product search, add to cart, and checkout. The tests are written in a structured way using the Page Object Model, which helps keep the code clean and reusable. This project helps find bugs quickly and ensures the website works smoothly for users.",
		github: "https://github.com/deepaksiinggh/OpenCart_Project",
		tags: ["Selenium", "TestNg", "Java","Docker"],
	},
];
