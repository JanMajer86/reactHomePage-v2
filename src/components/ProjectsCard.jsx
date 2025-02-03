import Wrapper from "../assets/wrappers/ProjectsCard";
import img1 from "./../assets/images/project1.jpg";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaSquareGithub } from "react-icons/fa6";
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

	const background = `background: linear-gradient(
		0deg,
		rgba(var(--color-prim), 0.9) 0%,
		rgba(var(--color-prim), 0.6) 50%
	), url(${img1}) background-Position: top center background- size: cover`;
	return (
		<Wrapper>
			<div className={`projects-card ${moreInfo ? "more-info" : ""}`}>
				<div className="card--left" style={`${background}`}>
					{/* <img className="project-img" src={img1} alt="alt text" /> */}
					<h3>{name}</h3>
				</div>

				<div className="card--right">
					{/* CHEVRON ICON */}
					<div className="stack-icon" onClick={handleClick}>
						<FaCircle className="fa-circle" />
						<FaCircleChevronLeft className="fa-chevron" />
					</div>
					{/* PROJECT INFO HERE */}
					<div className="info-container">
						<div className="info-basic">{basicInfo}</div>
						<div className="info-add">
							{additionalInfo}
							{/* PROJECT LINKS */}
							<div className="info-add--links">
								{/* site link */}
								<a href={http} target="_blank">
									<button className="btn-project view">
										<TbWorldWww />
										view project
									</button>
								</a>
								{/* code link */}
								<a href={gitHub} target="_blank">
									<button className="btn-project">
										<FaSquareGithub />
										view code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default ProjectsCard;
