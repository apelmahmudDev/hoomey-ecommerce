import { FC, useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "../../ui";
import { useRouter } from "next/router";
import { regex } from "../../../utils/validations/regex";

interface BreadcrumbsItem {
	page: string;
	links: { name: string; link: string }[];
}

// breadcrumbs item
const women: BreadcrumbsItem = {
	page: "Women",
	links: [{ name: "Home", link: "" }],
};

const men: BreadcrumbsItem = {
	page: "Men",
	links: [{ name: "Home", link: "" }],
};

const kids: BreadcrumbsItem = {
	page: "Kids",
	links: [{ name: "Home", link: "" }],
};

const baby: BreadcrumbsItem = {
	page: "Baby",
	links: [{ name: "Home", link: "" }],
};

const pets: BreadcrumbsItem = {
	page: "Pets",
	links: [{ name: "Home", link: "" }],
};

const healthBeauty: BreadcrumbsItem = {
	page: "Health and Beauty",
	links: [{ name: "Home", link: "" }],
};

const electronics: BreadcrumbsItem = {
	page: "Electronics",
	links: [{ name: "Home", link: "" }],
};

const jewelry: BreadcrumbsItem = {
	page: "Jewelry",
	links: [{ name: "Home", link: "" }],
};

const homeAndGarden: BreadcrumbsItem = {
	page: "Home & Garden",
	links: [{ name: "Home", link: "" }],
};

const gymAndSports: BreadcrumbsItem = {
	page: "Gym & Sports",
	links: [{ name: "Home", link: "" }],
};

const menClothing: BreadcrumbsItem = {
	page: "Clothing",
	links: [
		{ name: "Home", link: "" },
		{ name: "Men", link: "men" },
	],
};

// reusable components to render breadcrumb item

const RenderBreadcrumb = ({ page }: { page: BreadcrumbsItem }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				"& > a": {
					gap: 0.3,
					display: "flex",
					margin: "0 7px",
					fontSize: "10px",
					color: "#939393",
					alignItems: "center",
					"&:hover": { textDecoration: "underline" },
				},
			}}
		>
			{page &&
				page.links &&
				page.links.map((item) => (
					<Link key={item.link} href={`/${item.link}`}>
						{item.name} <ChevronRightIcon sx={{ fontSize: 10 }} />
					</Link>
				))}
			<Typography sx={{ fontSize: 10, mt: 0.2 }} color="primary">
				{page.page}
			</Typography>
		</Box>
	);
};

const AppBreadcrumb: FC = () => {
	const router = useRouter();

	const [page, setPage] = useState({} as BreadcrumbsItem);

	const pathname = router.pathname.replace(regex.removeSlash, "");

	console.log(router);

	// change breadcrumbs items with changing every page

	useEffect(() => {
		if (pathname === "men") setPage(men);
		if (pathname === "women") setPage(women);
		if (pathname === "kids") setPage(kids);
		if (pathname === "baby") setPage(baby);
		if (pathname === "pets") setPage(pets);
		if (pathname === "health-and-beauty") setPage(healthBeauty);
		if (pathname === "electronics") setPage(electronics);
		if (pathname === "jewelry") setPage(jewelry);
		if (pathname === "home-and-garden") setPage(homeAndGarden);
		if (pathname === "gym-and-sports") setPage(gymAndSports);
		if (pathname === "men-clothing") setPage(menClothing);
	}, [pathname]);

	return (
		<Box my={3}>
			<Container>
				<RenderBreadcrumb page={page} />
			</Container>
		</Box>
	);
};

export default AppBreadcrumb;
