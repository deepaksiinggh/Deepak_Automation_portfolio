import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Experience />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default App;
