import { projects } from "../data";
import ProjectsCard from "../components/ProjectsCard";
import Wrapper from "../assets/wrappers/Projects";
import { GoProjectRoadmap } from "react-icons/go";
import { useEffect, useState } from "react";

const Projects = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleSetActiveTab = (e) => {
		const newActive = parseInt(e.currentTarget.dataset.value);
		setActiveTab(newActive);
	};

	const project1 = projects[0];
	return (
		<Wrapper>
			<div className="tabs-container">
				<div
					data-value={1}
					className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #1</span>
				</div>
				<div
					data-value={2}
					className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #2</span>
				</div>
				<div
					data-value={3}
					className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
					onClick={handleSetActiveTab}
				>
					<GoProjectRoadmap />
					<span>project #3</span>
				</div>
			</div>
			<ProjectsCard {...project1} />
		</Wrapper>
	);
};
export default Projects;
