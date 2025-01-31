import Wrapper from "../assets/wrappers/ProjectsCard";
import img1 from "./../assets/images/project1.jpg";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const ProjectsCard = () => {
	return (
		<Wrapper>
			<div className="projects-card">
				<div className="card--left">
					<img className="project-img" src={img1} alt="alt text" />
					<h3>project name</h3>
				</div>

				<div className="card--right">
					<div className="stack-icon">
						<FaCircle />
						<FaCircleChevronLeft color="var(--color-grey-light-1)" />
					</div>
					info here
				</div>
			</div>
		</Wrapper>
	);
};
export default ProjectsCard;
