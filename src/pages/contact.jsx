import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Build the Future Together
						</div>

						<div className="subtitle contact-subtitle">
							I'm a passionate software developer actively seeking opportunities in full-stack and backend development roles. With a strong foundation in web technologies and a keen interest in emerging fields, I'm particularly excited about Web3 and AI applications. I've worked on projects in both domains and am eager to contribute my skills to innovative teams.

							You can reach me at{" "}
							<a href="mailto:akashmishra9896@gmail.com">
								akashmishra9896@gmail.com
							</a>
							. I'm open to both full-time positions and internships that allow me to grow while working on meaningful projects.

							My GitHub profile showcases my Web3 and AI projects, demonstrating my ability to work with modern technologies and solve complex problems. I'm particularly interested in roles that combine traditional web development with cutting-edge technologies like blockchain and machine learning.

							Let's connect and discuss how we can create something amazing together!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
