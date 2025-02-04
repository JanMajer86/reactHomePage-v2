import { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";

import { projects } from "../data";

import ProjectsCard from "../components/ProjectsCard";
import Wrapper from "../assets/wrappers/Projects";

const Projects = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleSetActiveTab = (e) => {
		const newActive = parseInt(e.currentTarget.dataset.value);
		setActiveTab(newActive);
	};

	return (
		<Wrapper>
			{/* TABS */}
			<div className="tabs-container">
				{projects.map((project, index) => {
					return (
						<div
							data-value={index}
							className={`tab ${activeTab === index ? "tab-active" : ""}`}
							onClick={handleSetActiveTab}
							key={index}
							style={{ flexBasis: `${100 / projects.length}%` }}
						>
							<GoProjectRoadmap />
							<span>project #{index + 1}</span>
						</div>
					);
				})}
			</div>
			{/* PROJECTS-CARD */}
			<div className="projects-container">
				{projects.map((project, projectIndex) => {
					return (
						<ProjectsCard
							{...project}
							activeTab={activeTab}
							index={projectIndex}
							key={projectIndex}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};
export default Projects;
