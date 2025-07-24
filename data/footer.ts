import {
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	ArrowUpRight,
} from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";

export interface Links{
	name: string;
	id: string;
	isExternal: boolean;
}

export const links: Links[] = [
	{ name: "About", id: "about", isExternal: false },
	{ name: "Projects", id: "portfolio", isExternal: false },
	{ name: "Blog", id: "blogs", isExternal: false },
	{ name: "Contact", id: "contact", isExternal: false },
	{
		name: "Resume",
		id: "https://drive.google.com/file/d/1W9DqxD5y0fhI9mCOG3uFLDM5DUSi41q3/view?usp=sharing",
		isExternal: true,
	},
	{ name: "Skills", id: "skills", isExternal: false },
];

interface Socials {
	icon: React.ElementType;
	href: string;
	label: string;
}

export const socials: Socials[] = [
	{
		icon: Github,
		href: "https://github.com/deepaksiinggh",
		label: "GitHub",
	},
	{
		icon: RiTwitterXFill,
		href: "https://x.com/DeepakSingh_rt8",
		label: "Twitter",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/deepak-singh-28b33b271/",
		label: "LinkedIn",
	},
];