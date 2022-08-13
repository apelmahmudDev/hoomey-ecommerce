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
	links: [{ name: "kids", link: "" }],
};

// reusable components to render breadcrumb item

const RenderBreadcrumb = ({ page }: { page: BreadcrumbsItem }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				"& > a": {
					color: "#939393",
					margin: "0 7px",
					fontSize: "10px",
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
			<Typography sx={{ fontSize: 10 }} color="primary">
				{page.page}
			</Typography>
		</Box>
	);
};

const AppBreadcrumb: FC = () => {
	const router = useRouter();

	const [page, setPage] = useState({} as BreadcrumbsItem);

	const pathname = router.pathname.replace(regex.removeSlash, "");

	useEffect(() => {
		if (pathname === "men") setPage(men);
		if (pathname === "women") setPage(women);
		if (pathname === "kids") setPage(kids);
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
