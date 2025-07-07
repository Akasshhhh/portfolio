import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const handleHamburgerClick = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
				<button className="nav-hamburger" onClick={handleHamburgerClick} aria-label="Open menu">
					<span className="nav-hamburger-bar"></span>
					<span className="nav-hamburger-bar"></span>
					<span className="nav-hamburger-bar"></span>
				</button>
				{menuOpen && (
					<div className="nav-dropdown">
						<ul>
							<li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
							<li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
							<li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
							<li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
						</ul>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default NavBar;
