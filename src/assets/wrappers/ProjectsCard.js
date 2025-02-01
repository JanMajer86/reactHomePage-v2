import styled from "styled-components";

const Wrapper = styled.div`
	--card-width: 78rem;

	.projects-card {
		width: var(--card-width);
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
		display: flex;
		position: relative;
		padding: 2rem;
		flex-grow: 1;
		border: 2px solid yellow;
	}

	.stack-icon svg {
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

	.stack-icon svg:hover {
		border: 4px solid;
		animation: pulsating-border 1s ease-in-out infinite;
	}

	.more-info .stack-icon svg {
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

	/* COLLAPSED */

	.info-container {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		border: 2px solid white;
		transition: all 0.5s ease-in;
	}
	.info-basic {
		width: calc(var(--card-width) * 0.38);
		padding: 2rem;
		visibility: visible;
		opacity: 1;
		transition: all 0.5s ease-in;
	}
	.info-add {
		width: calc(var(--card-width) * 0.62);
		padding: 2rem;

		visibility: hidden;
		opacity: 0;
		transition: all 0.5s ease-in;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.more-info .info-container {
		left: -62%;
	}

	.more-info .info-basic {
		visibility: hidden;
		opacity: 0;
	}
	.more-info .info-add {
		visibility: visible;
		opacity: 1;
	}

	/* LINKS */

	.info-add--links {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.btn-project {
		background-color: transparent;
		color: var(--color-grey-light-1);
		font-size: large;
	}

	.btn-project svg {
	}
`;

export default Wrapper;
