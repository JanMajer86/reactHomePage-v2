import { techStack } from "../data";
import Wrapper from "../assets/wrappers/CardContent";

export const CardOneTop = () => {
	return (
		<Wrapper>
			<div className="c1top">
				<p>
					Try-hard photo booth glossier jean shorts chicharrones pinterest
					subway tile heirloom.
				</p>
				<p>
					Ennui gluten-free quinoa adaptogen, cronut butcher street art
					letterpress.
				</p>
			</div>
		</Wrapper>
	);
};

export const CardOneBottom = () => {
	return (
		<Wrapper>
			<div className="c1bottom bottom">
				<ul>
					{techStack.map((item, index) => {
						const { name, icon, info } = item;
						return (
							<li key={index}>
								{icon}
								<span>{name}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

export const CardTwoTop = () => {
	return (
		<Wrapper>
			<div className="c2top">
				<h3 className="subheading">
					<span>Hi, How Are You?</span>
				</h3>
				<h1>
					<span>
						I'm{" "}
						<em>
							<i>Jan</i>
						</em>
					</span>
				</h1>
				<h3>
					<span>FullStack Web Developer</span>
				</h3>
			</div>
		</Wrapper>
	);
};
export const CardTwoBottom = () => {
	return (
		<Wrapper>
			<div className="c2bottom bottom">
				<p>
					Building handcrafted, human-coded, custom made website experiences
					with impact.
				</p>
				<button className="btn btn--primary">download cv</button>
			</div>
		</Wrapper>
	);
};
export const CardThreeTop = () => {
	return <>3top</>;
};
export const CardThreeBottom = () => {
	return <>3bottom</>;
};
