import React from "react";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<div className="section-title">Work Experience</div>
			<div className="works-body">
				<div className="work">
					<div className="work-header">
						<div className="work-company">Redbelly Network</div>
						<div className="work-duration">Dec 2023 - Mar 2025</div>
					</div>
					<div className="work-role">Software Development Engineer Intern</div>
					<ul className="work-details">
						<li> Built an AMM-based DEX & liquidity pool dApp on Redbelly Devnet for decentralized trading and token management. </li>
						<li> Developed a dApp using Hardhat and Ethers.js, enabling wrapping and unwrapping of the native token. </li>
						<li> Created a Discord bot for large communities (30k+ members), automating NFT-based Discord role assignments. </li>
						<li> Engineered an NFT minting dApp, supporting minting and burning of 500+ unique NFTs. </li>
						<li> Constructed robust and scalable decentralized applications using Next.js, Express.js, Supabase, Web3.js, Solidity etc.</li>
						<li> Audited smart contracts using static analysis, manual code reviews, and gas optimizations to ensure security and efficiency.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Works;
