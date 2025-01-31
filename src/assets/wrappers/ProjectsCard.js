import styled from "styled-components";

const Wrapper = styled.div`
	.projects-card {
		width: 78rem;
		height: 30rem;
		border: 4px solid var(--color-primary);
		display: flex;
	}
	.card--left {
		border-right: 4px solid var(--color-primary);
		width: 62%;
		overflow: hidden;
		position: relative;
		display: inline-block;
	}

	.project-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.card--left h3 {
		position: absolute;
		z-index: 20;
		background-color: var(--color-primary);
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
	}

	.card--left::before {
		content: "";
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			0deg,
			rgba(var(--color-prim), 0.9) 0%,
			rgba(var(--color-prim), 0.6) 50%
		);
	}
	.card--right {
		position: relative;
		padding: 2rem;
	}

	.card--right svg {
		position: absolute;
		top: 50%;
		left: -2px;
		transform: translate(-50%, -50%);
		z-index: 20;
		font-size: 4.8rem;
		font-weight: 900;
		color: var(--color-primary);
		cursor: pointer;
	}

	.stack-icon {
		display: grid;
		svg {
			grid-area: 1/1;
		}
	}
`;

export default Wrapper;
