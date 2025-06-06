import {
	FaLinkedin,
	FaBluesky,
	FaFacebook,
	FaSquareInstagram,
	FaSquareGithub,
} from "react-icons/fa6";
// tech stack icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// project images
import imgProject1 from "./assets/images/project1.jpg";
import imgProject2 from "./assets/images/project2.jpg";
import imgProject3 from "./assets/images/project3.jpg";

export const navbarLinks = [
	{
		href: "#home",
		text: "home",
	},
	{
		href: "#about",
		text: "about",
	},
	{
		href: "#projects",
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

// tech stack:
// html, css, js, react, node, mongodb

export const projects = [
	{
		name: "project name",
		img: imgProject1,
		basicInfo: "basic info",
		additionalInfo: "additional info",
		http: "http link",
		gitHub: "code link",
	},
	{
		name: "project 2 name",
		img: imgProject2,
		basicInfo: "project 2 basic info",
		additionalInfo: "project 2 additional info",
		http: "http link",
		gitHub: "code link",
	},
	{
		name: "project 3 name",
		img: imgProject3,
		basicInfo: "project 3 basic info",
		additionalInfo: "project 3 additional info",
		http: "http link",
		gitHub: "code link",
	},
];
