import { experiences, skills } from "@/data/experience";

const Experience = () => {
	return (
		<div id="skills" className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-7">
			{/* Skills Section */}
			<div>
				<h2 className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5">Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 duration-300 text-center"
						>
							<h3 className="font-semibold text-lg">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>

			{/* Experience Section - (commented out) */}
			{/*
			<div>
				<h2 className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5">Experience</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div key={index}>
							<span className="text-sm text-gray-500">{exp.period}</span>
							<h3 className="font-semibold text-xl mt-1">{exp.role}</h3>
							<h4 className="text-blue-600 text-lg">{exp.company}</h4>
							<p className="text-gray-600 mt-2">{exp.description}</p>
						</div>
					))}
				</div>
			</div>
			*/}
		</div>
	);
};

export default Experience;
