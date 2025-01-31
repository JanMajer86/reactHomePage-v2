import styled from "styled-components";

const Wrapper = styled.div`
	.logo-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6.4rem;
		height: 4.8rem;
		color: var(--color-grey-light-1);
		background-color: var(--color-black);
		border-radius: 50%;
	}
	.header-main {
		position: relative;
		top: -0.2rem;
		font-weight: 600;
	}

	.top {
		display: inline-block;
		position: relative;
		top: -0.3rem;
	}

	.slash {
		color: var(--color-primary-light-1);
		font-weight: 700;
		padding: 0 0.2rem;
	}

	.bottom {
		display: inline-block;
		position: relative;
		top: 0.2rem;
	}
`;

export default Wrapper;
