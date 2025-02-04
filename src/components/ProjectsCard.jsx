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
	activeTab,
	index,
}) => {
	const [moreInfo, setMoreInfo] = useState(false);

	const handleClick = () => {
		setMoreInfo(!moreInfo);
	};

	console.log(index);

	return (
		<Wrapper>
			<div
				className={`projects-card ${moreInfo ? "more-info" : ""}`}
				style={{
					transform: `translateX(${(index - activeTab) * 100}%)`,
					opacity: index === activeTab ? 1 : 0,
					visibility: index === activeTab ? "visible" : "hidden",
				}}
			>
				<div className="card--left" style={{ "--img": `url(${img})` }}>
					<h3>{name}</h3>
				</div>
				{/* CHEVRON ICON */}
				<div className="stack-icon" onClick={handleClick}>
					<FaCircle className="fa-circle" />
					<FaCircleChevronLeft className="fa-chevron" />
				</div>

				<div className="card--right">
					{/* PROJECT INFO HERE */}
					<div className="info-container">
						<div className="info-basic">{basicInfo}</div>
						<div className="info-add">
							{additionalInfo}
							{/* PROJECT LINKS */}
							<div className="info-add--links">
								{/* site link */}
								<a href={http} target="_blank">
									<button className="btn-project">
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
