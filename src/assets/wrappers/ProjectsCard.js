import styled from "styled-components";

const Wrapper = styled.div`
	.projects-card {
		width: 78rem;
		height: 30rem;
		border: 4px solid var(--color-primary);
		display: flex;
		overflow-x: hidden;
	}
	.card--left {
		border-right: 4px solid var(--color-primary);
		width: 62%;
		overflow: hidden;
		position: relative;
		display: inline-block;
		transition: all 0.4s ease-out;
	}

	.more-info .card--left {
		width: 38%;
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
		flex-grow: 1;
	}

	.card--right svg {
		position: absolute;
		top: 50%;
		left: -2px;
		transform: translate(-50%, -50%) rotate(0deg);
		z-index: 20;
		font-size: 4.8rem;
		font-weight: 900;
		color: var(--color-primary);
		cursor: pointer;
		transition: transform 0.4s ease-out;
		box-sizing: content-box;
		border-radius: 50%;
	}

	.card--right svg:hover {
		border: 4px solid;
		animation: pulsating-border 1s ease-in-out infinite;
	}

	.more-info .card--right svg {
		transform: translate(-50%, -50%) rotate(180deg);
	}

	.stack-icon {
		display: grid;
		svg {
			grid-area: 1/1;
		}
	}

	@keyframes pulsating-border {
		0% {
			border-color: rgba(var(--color-prim), 0);
		}
		50% {
			border-color: rgba(var(--color-prim), 1);
		}
		100% {
			border-color: rgba(var(--color-prim), 0);
		}
	}

	.info-container {
		display: flex;
		position: relative;
		width: 200%;
	}
	.info-basic {
		width: 100%;
		visibility: visible;
		opacity: 1;
		transition: all 0.5s ease-in;
	}
	.info-additional {
		width: 100%;
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s ease-in;
	}

	.more-info .info-basic {
		width: 0%;
		visibility: hidden;
		opacity: 0;
	}
	.more-info .info-additional {
		visibility: visible;
		opacity: 1;
	}
`;

export default Wrapper;
