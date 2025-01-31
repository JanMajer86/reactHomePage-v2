import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";

const IndexLayout = () => {
	return (
		<div className="page">
			<div className="page-container">
				<Navbar />
			</div>
			<div className="page-container">
				<Home />
			</div>
			<div className="page-container">
				<About />
			</div>
			<div className="page-container">
				<Projects />
			</div>
			<div className="page-container">
				<Footer />
			</div>
			{/* <main className="section-main">
				<section className="page"></section>
			</main>
			<Footer /> */}
		</div>
	);
};
export default IndexLayout;
