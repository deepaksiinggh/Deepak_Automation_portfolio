import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectLinksProps {
	github?: string;
	demo?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, demo }) => {
	// Only render the container if there are links to show
	if (!github && !demo) return null;

	return (
		<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
			{github && (
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
				>
					<Github className="w-6 h-6 text-gray-800" />
				</a>
			)}
			{demo && (
				<a
					href={demo}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
				>
					<ExternalLink className="w-6 h-6 text-gray-800" />
				</a>
			)}
		</div>
	);
};

const Portfolio = () => {
	return (
		<div id="portfolio" className="py-10 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
						My Projects
					</h2>
					<p className="text-xl text-gray-600 mb-10">
						Here are some of my recent works that showcase my skills and passion
						for Automation & Development.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
						>
							<div className="aspect-w-16 aspect-h-9 relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<ProjectLinks github={project.github} demo={project.demo} />
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
