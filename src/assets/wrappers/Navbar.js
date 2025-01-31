import styled from "styled-components";

const Wrapper = styled.div`
	.navbar {
		/* margin-bottom: 2rem; */
		/* min-height: 4rem; */
	}

	.navbar--divider {
		width: 100%;
		height: 3px;
		background: linear-gradient(
			to right,
			rgba(var(--color-prim), 0) 20%,
			rgba(var(--color-prim), 0.6)
		);
	}

	.navbar--container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.links-container {
		width: max-content;
	}

	.nav-link {
		margin: 0 4rem;
	}
`;

export default Wrapper;
