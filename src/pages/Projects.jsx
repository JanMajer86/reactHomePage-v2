import { projects } from "../data";
import ProjectsCard from "../components/ProjectsCard";
import Wrapper from "../assets/wrappers/Projects";
import { GoProjectRoadmap } from "react-icons/go";

const Projects = () => {
	const project1 = projects[0];
	return (
		<Wrapper>
			<div className="tabs-container">
				<div className="tab">
					<GoProjectRoadmap />
					project #1
				</div>
				<div className="tab tab-active">
					<GoProjectRoadmap />
					project #2
				</div>
				<div className="tab">
					<GoProjectRoadmap />
					project #3
				</div>
			</div>
			<ProjectsCard {...project1} />
		</Wrapper>
	);
};
export default Projects;
