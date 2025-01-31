import Wrapper from "../assets/wrappers/Footer";
import { socialLinks } from "../data";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Wrapper>
			<footer className="footer">
				<div className="footer--divider"></div>
				<div className="footer--container">
					<div className="copyleft">&copy; {currentYear} Jan Majer</div>
					<div className="footer--social-icons">
						{socialLinks.map((social, index) => {
							const { href, icon } = social;
							return (
								<a href={href} className="link-social" key={index}>
									{icon}
								</a>
							);
						})}
					</div>
				</div>
				<div className="footer--divider"></div>
			</footer>
		</Wrapper>
	);
};
export default Footer;
