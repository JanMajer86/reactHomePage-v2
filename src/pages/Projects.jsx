import { projects } from "../data";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
	const project1 = projects[0];
	console.log(project1);
	return (
		<>
			<ProjectsCard {...project1} />
		</>
	);
};
export default Projects;
