"use client";

import React from "react";
import { Cardo } from "next/font/google";

const cardo = Cardo({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const About = () => {
	return (
		<div
			id="about"
			className="blockanimation px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-4 mb-10"
		>
			<div>
				<h2 className="text-lg uppercase tracking-wider text-gray-600">
					About me
				</h2>
				<div className="w-20 h-[2px] bg-gray-500" />
			</div>

			<h1
				className={`${cardo.className} text-xl sm:text-2xl md:text-3xl font-bold pt-5 leading-10`}
			>
				I&#39;m an aspiring Automation Engineer with hands-on skills in Selenium, Java, and TestNG. I&#39;m passionate about ensuring software quality through reliable and efficient test automation.
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 mt-4 sm:mt-10 md:mt-12 lg:mt-16">
				{/* Left Column */}
				<div>
					<h1
						className={`${cardo.className} text-2xl sm:text-3xl md:text-4xl text-[#009bdf] font-semibold pt-5 leading-10`}
					>
						I build reliable and maintainable automated test scripts.
					</h1>
				</div>
				<div>
					<p className="text-lg font-normal">
						I&#39;m Deepak Singh, a Computer Science graduate (B.Tech, 2024) with a strong foundation in both frontend and test automation technologies. I have hands-on knowledge of HTML, CSS, Java, TestNG, React, MySQL, GitHub, and Postman. I&#39;m passionate about building quality-driven web applications and automated testing solutions that ensure performance, reliability, and great user experience.
					</p>

					<p className="mt-5 text-lg text-gray-500 font-normal">
						With a strong foundation in automation testing, I specialize in understanding software requirements and developing effective test scripts to ensure product quality. I&#39;m trained in tools like Selenium, Java, and TestNG, and I&#39;m eager to contribute to teams focused on delivering reliable and efficient software.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
