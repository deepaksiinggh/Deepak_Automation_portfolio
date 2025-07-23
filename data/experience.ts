interface Skill {
	name: string;
}

interface Experience {
	period: string;
	role: string;
	company: string;
	description: string;
}

export const skills: Skill[] = [
	{ name: "Java" },
	{ name: "Selenium" },
	{ name: "TestNG" },
	{ name: "PostMan" },
	{ name: "ReactJs" },
	{ name: "JavaScript" },
	{ name: "HTML/CSS" },
	{ name: "Git" },
	{ name: "Docker" },
];

export const experiences: Experience[] = [
	{
		period: "July 2024 - Aug 2024",
		role: "Frontend Developer",
		company: "DevFest Lagos",
		description:
			"As a Frontend Engineer at DevFest Lagos, I optimized a website for 3,500+ users, improving rendering speed by 20% and reducing load times by 30%. I also enhanced user satisfaction with a cohesive, accessible, and responsive interface.",
	},
	{
		period: "Jan 2024 - June 2024",
		role: "Frontend Developer",
		company: "Laferla",
		description:
			"Developed a digital insurance card platform with Google Wallet and Apple API, boosting user adoption by 25%. Redesigned the landing page, improving authentication flows and increasing new customer acquisition by 20%, and created a user-friendly dashboard, raising user retention by 15%.",
	},
	{
		period: "July 2023 - Nov 2023",
		role: "Frontend Developer",
		company: "MEGA League",
		description:
			"Designed and maintained the frontend for a global platform connecting STEM and AI students, boosting user engagement by 35% and ensuring stability during high-traffic hackathons.",
	},
];
