import { projects } from "../data";
import ProjectsCard from "../components/ProjectsCard";
import Wrapper from "../assets/wrappers/Projects";
import { GoProjectRoadmap } from "react-icons/go";
import { useState } from "react";

const Projects = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleSetActiveTab = (e) => {
		const newActive = parseInt(e.currentTarget.dataset.value);
		setActiveTab(newActive);
	};

	const project1 = projects[0];

	return (
		<Wrapper>
			{/* TABS */}
			<div className="tabs-container">
				<div
					data-value={0}
					className={`tab ${activeTab === 0 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #1</span>
				</div>
				<div
					data-value={1}
					className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #2</span>
				</div>
				<div
					data-value={2}
					className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #3</span>
				</div>
			</div>
			{/* TABS */}
			{/* <ProjectsCard {...project1} /> */}
			<div className="projects-container">
				{projects.map((project, projectIndex) => {
					return (
						<ProjectsCard
							{...project}
							activeTab={activeTab}
							index={projectIndex}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};
export default Projects;
