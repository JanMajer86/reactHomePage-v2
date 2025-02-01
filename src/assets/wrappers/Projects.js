import styled from "styled-components";

const Wrapper = styled.div`
	.tabs-container {
		width: var(--card-width);
		height: 4rem;
		display: flex;
		border: 4px solid var(--color-primary);
		border-bottom: none;
	}
	.tab {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tab:not(:last-of-type) {
		border-right: 4px solid var(--color-primary);
	}

	.tab svg {
		margin-right: 0.8rem;
	}
`;

export default Wrapper;
