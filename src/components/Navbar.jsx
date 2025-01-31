import { navbarLinks } from "../data";
import Logo from "./Logo";
import { MdOutlineWbSunny } from "react-icons/md";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="navbar">
				<div className="navbar--divider"></div>
				<div className="navbar--container">
					<div className="logo">
						<Logo />
					</div>
					<div className="links-container">
						<nav>
							{navbarLinks.map((link, index) => {
								const { href, text, special } = link;

								return special ? (
									<button key={index} className="btn btn--secondary">
										{text}
									</button>
								) : (
									<a href={href} key={index} className="nav-link">
										{text}
									</a>
								);
							})}
						</nav>
					</div>
					<div className="dark-mode--container">
						<MdOutlineWbSunny className="dark-mode--icon" />
					</div>
				</div>
				<div className="navbar--divider"></div>
			</div>
		</Wrapper>
	);
};
export default Navbar;
