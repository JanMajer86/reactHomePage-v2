import {
	FaLinkedin,
	FaBluesky,
	FaFacebook,
	FaSquareInstagram,
	FaSquareGithub,
} from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const navbarLinks = [
	{
		href: "/",
		text: "home",
	},
	{
		href: "/About",
		text: "about",
	},
	{
		href: "/Projects",
		text: "projects",
	},
	{ href: "#", text: "contact", special: true },
];

export const socialLinks = [
	{ href: "#", icon: <FaLinkedin /> },
	{ href: "#", icon: <FaSquareGithub /> },
	{ href: "#", icon: <FaBluesky /> },
	{ href: "#", icon: <FaFacebook /> },
	{ href: "#", icon: <FaSquareInstagram /> },
];

export const techStack = [
	{ name: "HTML5", icon: <FaHtml5 />, info: "" },
	{ name: "CSS3", icon: <FaCss3Alt />, info: "" },
	{ name: "JavaScript", icon: <FaJs />, info: "" },
	{ name: "React", icon: <FaReact />, info: "" },
	{ name: "Node.js", icon: <FaNodeJs />, info: "" },
	{ name: "MongoDB", icon: <SiMongodb />, info: "" },
];

// techstack:
// html, css, js, react, node, mongodb
