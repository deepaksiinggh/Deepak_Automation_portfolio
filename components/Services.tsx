import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Services = () => {
	return (
		<div id="services" className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10">
			<h1 className="text-3xl sm:text-4xl font-semibold">
				What I do?
			</h1>

			<p className="text-lg font-normal mt-5 text-gray-600">
				From analyzing automation needs to designing robust test frameworks and delivering reliable solutions, I manage every stage with precision. As an automation tester, I ensure that each phase—from test planning and scripting to execution and reporting—is handled meticulously, resulting in efficient, scalable, and maintainable test coverage.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-8 mt-10 ">
				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px] hover:scale-105 transition-transform duration-300">
					<div className="flex gap-4 items-center">
						<FaLaptopCode className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium">Automation Developer</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							If you're looking for someone to design and implement effective test automation solutions, I’m an enthusiastic automation developer ready to ensure your application’s quality and reliability with precision and commitment.
						</p>
					</div>
				</div>

				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px] hover:scale-105 transition-transform duration-300">
					<div className="flex gap-4 items-center">
						<IoPhonePortraitOutline className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium ">Web development</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							If you&#39;re looking for a developer to handle the research and
							development of your website, I am a seasoned professional ready to
							bring your vision to life with expertise and dedication.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
