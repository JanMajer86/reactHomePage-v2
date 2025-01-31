import styled from "styled-components";

const Wrapper = styled.div`
	.footer {
		/* margin-top: 2rem; */
		/* flex-shrink: 0; */
	}
	.footer--divider {
		width: 100%;
		height: 3px;
		background: linear-gradient(
			to right,
			rgba(var(--color-prim), 0.6) 20%,
			rgba(var(--color-prim), 0)
		);
	}
	.footer--container {
		height: 4.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-grey-dark);
	}
	.footer--social-icons {
		display: flex;
		gap: 2.4rem;
		font-size: 2.4rem;
	}
	.link-social {
		color: var(--color-grey-dark);
		transition: all 0.2s ease-out;
	}
	.link-social:hover {
		color: var(--color-primary-light-2);
	}
`;

export default Wrapper;
