import bgImg from "./../images/hero.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
	/* max-width: var(--width);
	margin: 0 auto;
	margin-bottom: 4rem; */

	h1 {
		font-size: 28rem;
		font-weight: 900;
		display: flex;
		justify-content: space-between;
		color: transparent;
		-webkit-text-stroke: 4px var(--color-primary-light-2);

		background-clip: text;

		/* background-image: url(${bgImg}) no-repeat top right; */
		/* background-attachment: fixed;
		background-size: cover;
		background-clip: text;
		-webkit-background-clip: text; */
	}
`;

export default Wrapper;
