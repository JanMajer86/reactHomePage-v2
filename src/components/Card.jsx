import styled from "styled-components";

const Wrapper = styled.div`
	.card {
		width: 29.6rem;
		min-width: 29.6rem;
		height: 48rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 1.2rem;
		border: 4px solid;
	}

	.card--top {
		padding: 2rem;
		border-bottom: 4px solid;
		border-color: inherit;
	}

	.card--top > div {
		height: 100%;
	}
	.card--bottom {
		/* padding: 2rem; */
		display: flex;
		flex-direction: column;
	}
`;

const Card = ({
	top,
	borderColor,
	gradientColor,
	bgColor,
	bgImg,
	bgPosition,
	bgSize,
	topSegmentContent,
	bottomSegmentContent,
}) => {
	const gradientBackground = `linear-gradient(to bottom,rgba(${gradientColor}, 0.6),rgba(${gradientColor}, 0.9)),url("${bgImg}") ${bgPosition}`;

	const topCardStyle = {
		height: top ? "60%" : "40%",
		background: top ? gradientBackground : bgColor,
		backgroundSize: bgSize,
	};

	const bottomCardStyle = {
		height: top ? "40%" : "60%",
		background: top ? bgColor : gradientBackground,
		backgroundSize: bgSize,
	};
	return (
		<Wrapper>
			<div className="card" style={{ borderColor: borderColor }}>
				<div className="card--top" style={topCardStyle}>
					{/* CARD TOP SEGMENT CONTENT */}
					{topSegmentContent}
				</div>
				<div className="card--bottom" style={bottomCardStyle}>
					{/* CARD BOTTOM SEGMENT CONTENT */}
					{bottomSegmentContent}
				</div>
			</div>
		</Wrapper>
	);
};
export default Card;
