import { Box, Container, Grid, Typography } from "@mui/material";
import { ICollection } from "../../../types/collection";
import { Link } from "../../ui";
import CollectionCard from "../CollectionCard";

const CollectionsGrid = ({ itemData }: { itemData: ICollection[] }) => {
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
		</Box>
	);
};

export default CollectionsGrid;
