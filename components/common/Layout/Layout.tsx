import React, { FC } from "react";
import { Navbar, AppBreadcrumb, NewsLetter, Commitment, Footer } from "../index";

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
