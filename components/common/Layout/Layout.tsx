import React, { FC } from "react";
import AppBreadcrumb from "../AppBreadcrumb";
import Commitment from "../Commitment";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter";

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
