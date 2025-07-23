"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/navbar";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState('');
	const NAV_HEIGHT = 64;

 // Determine if a section is substantially visible
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SectionElement {
  id: string;
  element: HTMLElement | null;
}

const isSubstantiallyVisible = useCallback((element: HTMLElement | null): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, NAV_HEIGHT);
  const sectionHeight = rect.height;
  return visibleHeight > sectionHeight * 0.3; // 30% visibility threshold
}, []);

useEffect(() => {
  const handleScroll = () => {
    // Only check for new active section if we're not in a click transition
    // or if the clicked section is substantially visible
    const clickedElement = clickedSection ? document.getElementById(clickedSection) : null;
    
    if (!clickedSection || isSubstantiallyVisible(clickedElement)) {
      const sectionElements = navItems.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const visibleSection = sectionElements.find(({ element }) => 
        isSubstantiallyVisible(element)
      );

      if (visibleSection) {
        setActiveSection(visibleSection.id);
        setClickedSection(''); // Clear clicked section when naturally scrolling
      }
    }
  };

  const debouncedHandleScroll = () => {
    window.requestAnimationFrame(handleScroll);
  };

  window.addEventListener('scroll', debouncedHandleScroll);
  handleScroll(); // Initial check
  
  return () => window.removeEventListener('scroll', debouncedHandleScroll);
}, [clickedSection, isSubstantiallyVisible]);

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
      behavior: 'smooth'
    });

    // Clear clicked section after scroll animation (roughly 1 second)
    setTimeout(() => {
      setClickedSection('');
    }, 1000);
  }
};

	return (
		<nav className="fixed w-full bg-white z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<span className="text-blue-500 font-semibold text-xl">Mr.</span>
							<span className="font-semibold uppercase text-xl tracking-wider">
								Deepak Singh
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center space-x-8">
						{navItems.map(({ id, label }) => (
							<li key={id}>
								<button
									onClick={() => scrollToSection(id)}
									className={`text-md hover:text-blue-500 transition-colors mr-2 ${
										activeSection == id ? "text-blue-500" : ""
									}`}
								>
									{label}
								</button>
							</li>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<div className="md:hidden ">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} md:hidden bg-white shadow-lg`}
			>
				<ul className="px-2 pt-2 pb-3 space-y-1">
			{navItems.map(({ id, label }) => (
			  <li key={id}>
				<button
				  className="block px-3 py-2 text-sm hover:text-blue-500 transition-colors"
				  onClick={() => scrollToSection(id)}
				>
				  {label}
				</button>
			  </li>
			))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
