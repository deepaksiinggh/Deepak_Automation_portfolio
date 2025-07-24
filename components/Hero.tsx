"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
	return (
		<div
			id="home"
			className="first-letter:relative min-h-screen bg-white flex items-center px-4 md:px-8 lg:px-16"
		>
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-screen mt-20 sm:mt-0">
				{/* Left Content */}
				<div className="flex-1 space-y-6 ml-0 sm:ml-16">
					<div className="mb-5">
						<h2 className="text-md uppercase tracking-wider text-gray-600">
							Hello, My name is
						</h2>

						<div className="w-14 h-[2px] bg-gray-500 mt-2" />
					</div>
					<div>
						<h1 className="text-5xl md:text-6xl font-semibold mt-2">
							Deepak Singh
						</h1>
						<h3 className="text-2xl md:text-3xl text-gray-600 mt-2">
							Your Next Automation Developer
						</h3>
					</div>

					<div className="space-y-2 pt-1">
						<div className="flex items-center space-x-2">
							<p className="text-lg text-gray-600 max-w-[500px]">
								I&#39;m an Automation Engineer who builds reliable test automation systems that help teams deliver faster, safer, and smarter software.
							</p>
						</div>

						<div className="flex items-center space-x-4 pt-4">
							<Link href="https://github.com/deepaksiinggh">
								<FaGithub size={20} />
							</Link>

							<Link href="https://www.linkedin.com/in/deepak-singh-28b33b271/">
								<FaLinkedin size={20} />
							</Link>

							<Link href="https://x.com/DeepakSingh_rt8">
								<FaSquareXTwitter size={20} />
							</Link>

							<Link href="mailto:deepakssinggh@gmail.com">
								<IoMdMail size={20} />
							</Link>
							<Link
      href="https://drive.google.com/file/d/1W9DqxD5y0fhI9mCOG3uFLDM5DUSi41q3/view?usp=sharing"
      target="_blank"
    >
      <h1 className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-lg font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300">
        Resume
      </h1>
    </Link>
						</div>
					</div>
				</div>

				{/* Right Content - Image */}
				<div className="relative flex justify-center items-center">
					<div className="aspect-square rounded-full overflow-hidden bg-gray-900 mt-0 w-[280px] sm:w-[300px] md:mt-20 lg:mt-0 md:w-[350px] lg:w-[450px]">
						<Image
							src="/images/porfolio.png"
							alt="Profile"
							width={1920}
							height={1920}
							priority
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
