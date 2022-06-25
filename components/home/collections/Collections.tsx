import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CollectionCard from "../../common/CollectionCard";
// import CollectionsGrid from "../../common/CollectionsGrid";

// data
import { itemData } from "./data";
import Link from "../../ui/Link";

const Collections: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Our Collections
				</Typography>
				<>
					<Grid container spacing={{ xs: 2, md: 5 }}>
						{itemData.map((item, idx) => (
							<Grid key={idx} item xs={6} sm={4} md={3}>
								<Link href={item.link}>
									<CollectionCard key={idx} item={item} />
								</Link>
							</Grid>
						))}
					</Grid>
				</>
			</Container>
			{/* <CollectionsGrid itemData={itemData} /> */}
		</Box>
	);
};

export default Collections;
