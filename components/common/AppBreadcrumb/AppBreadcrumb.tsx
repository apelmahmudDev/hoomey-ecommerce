import { FC } from "react";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "../../ui";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const AppBreadcrumb: FC = () => {
	const router = useRouter();

	// console.log(router.query);

	const keys = Object.values(router.query);
	console.log(keys);

	return (
		<Box pt={3} pb={4}>
			<Container>
				<Stack spacing={2}>
					<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
						{/* {breadcrumbs} */}
						<Link href="/">Home</Link>
						{keys &&
							keys?.map((link, idx) => (
								<Link key={idx} href={`/${link}`}>
									{link}
									{/* {link && link[0].toUpperCase() + link.substring(1)} */}
								</Link>
							))}
					</Breadcrumbs>
				</Stack>
			</Container>
		</Box>
	);
};

export default AppBreadcrumb;
