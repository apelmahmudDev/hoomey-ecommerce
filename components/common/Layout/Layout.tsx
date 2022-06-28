import React, { FC } from "react";
import AppBreadcrumb from "../AppBreadcrumb";
import Commitment from "../Commitment";
import NewsLetter from "../NewsLetter";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<nav>
				<Navbar />
			</nav>

			<main>
				<AppBreadcrumb />
				{children}
				<NewsLetter />
				<Commitment />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
