import styled from "styled-components";

const Wrapper = styled.div`
	.projects-card {
		width: var(--card-width);
		position: absolute;
		height: 30rem;
		display: flex;
		transition: all 0.2s ease-in;
	}
	.card--left {
		width: 62%;
		border-right: 4px solid var(--color-primary);
		position: relative;
		/* display: inline-block; */
		transition: all 0.4s ease-out;
		background: linear-gradient(
				0deg,
				rgba(var(--color-prim), 0.9) 0%,
				rgba(var(--color-prim), 0.6) 50%
			),
			var(--img);
		background-position: top center;
		background-size: cover;
	}

	.more-info .card--left {
		width: 38%;
	}

	.card--left h3 {
		position: absolute;
		z-index: 20;
		background-color: var(--color-primary);
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.3s ease-out;
	}

	.more-info .card--left h3 {
		bottom: -16px;
		visibility: hidden;
		opacity: 0;
	}

	.card--right {
		display: flex;
		position: relative;
		padding: 2rem;
		flex-grow: 1;
		overflow: hidden;
		background-color: rgba(var(--color-prim-dark-2), 0.3);
	}

	/* CHEVRON ICON */
	.stack-icon {
		display: grid;
		svg {
			grid-area: 1/1;
		}
	}

	.stack-icon svg {
		position: absolute;
		top: 50%;
		left: calc(var(--card-width) * 0.618);
		/* left: 0%; */
		transform: translate(-50%, -50%) rotate(0deg);
		z-index: 20;
		font-size: 4.8rem;
		font-weight: 900;
		box-sizing: content-box;
		border-radius: 50%;
		transition: all 0.4s ease-out;
		cursor: pointer;
	}

	.fa-circle {
		color: var(--color-primary);
	}
	.fa-chevron {
		color: var(--color-grey-light-1);
	}

	.fa-chevron:hover {
		border: 6px solid;
		animation: pulsating-border 1s ease-in-out infinite;
	}

	.more-info .stack-icon svg {
		left: calc(var(--card-width) * 0.378);
		transform: translate(-50%, -50%) rotate(180deg);
	}

	@keyframes pulsating-border {
		0% {
			border-color: rgba(var(--color-prim), 0);
			color: var(--color-grey-light-1);
		}
		50% {
			border-color: rgba(var(--color-prim), 1);
			color: var(--color-white);
		}
		100% {
			border-color: rgba(var(--color-prim), 0);
			color: var(--color-grey-light-1);
		}
	}

	/* COLLAPSED */

	.info-container {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		transition: all 0.5s ease-in;
	}
	.info-basic {
		width: calc(var(--card-width) * 0.38);
		padding: 2rem;
		visibility: visible;
		opacity: 1;
		transition: all 0.3s ease-in;
	}
	.info-add {
		width: calc(var(--card-width) * 0.62);
		padding: 2rem;
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease-out;
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
		justify-content: center;
	}

	.btn-project {
		background-color: transparent;
		border: 3px solid var(--color-grey-dark-2);
		display: flex;
		align-items: center;
		border-radius: 6px;
		color: var(--color-grey-light-1);
		padding: 0.8rem 2rem;
		font-size: large;
		transition: all 0.2s ease-out;
	}

	.btn-project:hover {
		border-color: var(--color-grey-light-2);
		transform: translateY(-2px);
		box-shadow: 0 2px 6px rgba(var(--color-prim), 0.4);
	}

	.btn-project svg {
		font-size: 2.6rem;
		margin-right: 1rem;
		color: var(--color-grey-dark);
		transition: all 0.2s ease-out;
	}
	.btn-project:hover svg {
		font-size: 2.6rem;
		margin-right: 1rem;
		color: var(--color-primary-light-2);
	}

	.btn-project:first-of-type {
		margin-right: 3rem;
	}
`;

export default Wrapper;
