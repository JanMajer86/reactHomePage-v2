import styled from "styled-components";

const Wrapper = styled.div`
	/* TABS */
	.tabs-container {
		width: var(--card-width);
		display: flex;
		border: 4px solid var(--color-primary);
		border-top-left-radius: var(--border-rad);
		border-top-right-radius: var(--border-rad);
		overflow: hidden;
		border-bottom: none;
	}
	.tab {
		position: relative;
		padding: 0.8rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			rgba(var(--color-prim), 0.3),
			rgba(var(--color-prim-dark-2), 0.7)
		);
		transition: all 0.2s ease-out;
		cursor: pointer;
	}
	.tab:not(:last-of-type) {
		border-right: 4px solid var(--color-primary);
	}
	.tab:first-of-type {
		/* border-top-left-radius: var(--border-rad); */
	}
	.tab svg {
		margin-right: 0.8rem;
		font-size: 2rem;
	}
	.tab:after {
		content: "";
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		background: linear-gradient(
			rgba(var(--color-second), 0.4),
			rgba(var(--color-second), 0.7)
		);
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}
	.tab-active:after {
		opacity: 1;
	}
	.tab-active {
		font-weight: 600;
		letter-spacing: 0.1rem;
	}
	.tab-active svg {
		z-index: 10;
		font-size: 2.4rem;

		stroke-width: 1.1;
	}
	.tab-active span {
		z-index: 10;

		background-color: var(--color-secondary-dark-2);
	}

	/* PROJECTS */

	.projects-container {
		width: var(--card-width);
		height: 30rem;
		position: relative;
		display: flex;
		overflow: hidden;
		border: 4px solid var(--color-primary);
		border-bottom-left-radius: var(--border-rad);
		border-bottom-right-radius: var(--border-rad);
	}
`;

export default Wrapper;
