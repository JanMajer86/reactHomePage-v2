// import Home from "./Home";
import Navbar from "./../components/Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./../components/Footer";
import HeroHeading from "../components/HeroHeading";

const IndexLayout = () => {
	return (
		<div className="page">
			<div className="page-container">
				<Navbar />
			</div>
			<header className="page-container page-header">
				<HeroHeading />
			</header>
			<main className="section-main">
				<div className="page-container" id="home">
					<Home />
				</div>
				<div className="page-container" id="about">
					<About />
				</div>
				<div className="page-container" id="projects">
					<Projects />
				</div>
			</main>
			<div className="page-container">
				<Footer />
			</div>
		</div>
	);
};
export default IndexLayout;
