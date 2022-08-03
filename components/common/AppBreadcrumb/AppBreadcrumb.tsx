import { FC } from "react";
import { Box, Typography, Breadcrumbs, Link, Container } from "@mui/material";
import { NavigateNextIcon } from "../../../uiElements/icons";

// const women = {
// 	page: "women",
// 	links: ["home", "women"],
// };
// const men = {
// 	page: "men",
// 	links: ["home", "men"],
// };
// const kids = {
// 	page: "kids",
// 	links: ["home", "kids"],
// };
// const product = {
// 	page: "product",
// 	links: ["home", "men", "clothing", "white cotton sweatshirt"],
// };

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const AppBreadcrumb: FC = () => {
	// const breadcrumbs = [
	// 	product.links.map((link) => (
	// 		<Link underline="hover" key="1" color="inherit" href={"/" + link} onClick={handleClick}>
	// 			{link}
	// 		</Link>
	// 	)),

	// 	// <Link
	// 	// 	underline="hover"
	// 	// 	key="2"
	// 	// 	color="inherit"
	// 	// 	href="/material-ui/getting-started/installation/"
	// 	// 	onClick={handleClick}
	// 	// >
	// 	// 	Core
	// 	// </Link>,

	// 	<Typography key="3" color="primary">
	// 		Women
	// 	</Typography>,
	// ];

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
			Home
		</Link>,
		// <Link
		// 	underline="hover"
		// 	key="2"
		// 	color="inherit"
		// 	href="/material-ui/getting-started/installation/"
		// 	onClick={handleClick}
		// >
		// 	Core
		// </Link>,
		<Typography key="3" color="primary">
			Men
		</Typography>,
	];
	return (
		<Box my={3}>
			<Container>
				<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
			</Container>
		</Box>
	);
};

export default AppBreadcrumb;
