import styled from "styled-components";

const Wrapper = styled.div`
	.c1top p:first-of-type {
		margin-bottom: 1.6rem;
	}
	.bottom {
		padding: 2rem 3.2rem;
	}

	li {
		display: flex;
		margin: 1rem 0;
		align-items: center;
	}

	li svg {
		font-size: 2.6rem;
		margin-right: 1.6rem;
		color: var(--color-primary-light-1);
	}

	li span {
		background-color: var(--color-primary-dark-1);
	}
	.c2top {
		color: var(--color-primary-dark-2);
		height: 100%;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		justify-content: end;
		text-align: right;
	}
	.c2top span {
		background-color: var(--color-secondary-dark-2);
		line-height: 1.35;
	}

	.c2top h1 {
		margin-bottom: 2rem;
		font-size: 5.32rem;
	}
	.c2bottom {
		display: flex;
		flex-direction: column;
	}
	.c2bottom p {
		margin-bottom: 3rem;
	}
`;

export default Wrapper;
