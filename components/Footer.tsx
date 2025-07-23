"use client";

import { Links, links, socials } from "@/data/footer";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [activeSection, setActiveSection] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [clickedSection, setClickedSection] = useState("");
	const NAV_HEIGHT = 64;

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// Immediately set active and clicked section
			setActiveSection(id);
			setClickedSection(id);

			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - NAV_HEIGHT;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			// Clear clicked section after scroll animation (roughly 1 second)
			setTimeout(() => {
				setClickedSection("");
			}, 1000);
		}
	};

	const renderLink = (link: Links) => {
		if (link.isExternal) {
			return (
				<a
					key={link.id}
					href={link.id}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
				>
					<span className="mr-2">{link.name}</span>
					<ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
				</a>
			);
		}

		return (
			<ul>
				<li key={link.id}>
					<button
						onClick={() => scrollToSection(link.id)}
						className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
					>
						<span className="mr-2">{link.name}</span>
						<ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
					</button>
				</li>
			</ul>
		);
	};

	return (
		<footer id="contact" className="relative bg-white">
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
					{/* About Section */}
					<div className="lg:col-span-1">
						<div className="space-y-6">
							<h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Let&#39;s Create Together
							</h3>
							<p className="text-gray-600 leading-relaxed">
								I&#39;m always excited to connect with fellow testers, developers, and anyone passionate about quality engineering. Whether you have a project that needs test automation or just want to discuss testing strategies, I&#39;m open to connect and collaborate.
							</p>
							<div className="flex flex-wrap gap-3">
								{socials.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
										aria-label={social.label}
									>
										<social.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="lg:col-span-1">
						<h3 className="text-lg font-semibold text-gray-900 mb-6">
							Quick Links
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{links.map(renderLink)}
						</div>
					</div>

					{/* Contact Section */}
					<div className="lg:col-span-1">
						<div className="bg-gray-50 rounded-2xl p-6 space-y-6">
							<h3 className="text-lg font-semibold text-gray-900">
								Get in Touch
							</h3>
							<p className="text-gray-600">
								Have a project in mind? Let&#39;s discuss how we can work together
								to bring your ideas to life.
							</p>
							<div className="space-y-4">
								<a
									href="mailto:deepakssinggh@gmail.com"
									className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
								>
									<Mail className="w-4 h-4 mr-2" />
									<span>Send me an email</span>
									<ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-gray-100">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© {currentYear} Deepak. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
