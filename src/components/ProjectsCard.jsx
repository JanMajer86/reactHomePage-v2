import Wrapper from "../assets/wrappers/ProjectsCard";
import img1 from "./../assets/images/project1.jpg";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProjectsCard = ({
	name,
	img,
	basicInfo,
	additionalInfo,
	http,
	gitHub,
}) => {
	const [moreInfo, setMoreInfo] = useState(false);

	const handleClick = () => {
		setMoreInfo(!moreInfo);
	};

	return (
		<Wrapper>
			<div className={`projects-card ${moreInfo ? "more-info" : ""}`}>
				<div className="card--left">
					<img className="project-img" src={img1} alt="alt text" />
					<h3>{name}</h3>
				</div>

				<div className="card--right">
					{/* CHEVRON ICON */}
					<div className="stack-icon" onClick={handleClick}>
						<FaCircle />
						<FaCircleChevronLeft
							color="var(--color-grey-light-1)"
							className="fa-circle"
						/>
					</div>
					{/* PROJECT INFO HERE */}
					<div className="info-container">
						<div className="info-basic">{basicInfo}</div>
						<div className="info-additional">{additionalInfo}</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default ProjectsCard;
