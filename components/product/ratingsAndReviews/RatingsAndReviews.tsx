import { Box, Button, Container, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

import { StarIcon, ThumbUpIcon } from "../../../uiElements/icons";
import { SectionBox } from "../../styledComponents";
import { CircularProgressbarWithCount, Heading } from "../../ui";

const RatingsAndReviews = () => {
	const [ratings, setRatings] = useState<number | null>(1);
	return (
		<SectionBox>
			<Container>
				<Heading text="Ratings & Reviews" variant="h6" textAlign="center" mb={5} />
				<Grid container spacing={5}>
					<Grid item xs={12} sm={6} md={4}>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithCount
									value={66}
									count={4}
									desc="Out of 5"
									icon={<StarIcon fontSize="large" color="primary" />}
								/>
							</Box>
							<Typography sx={{ mt: 4, fontSize: 18, fontWeight: 500 }}>Based on 365 ratings</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithCount
									value={90}
									count="93%"
									desc="Out of 5"
									icon={<ThumbUpIcon fontSize="large" color="primary" />}
								/>
							</Box>
							<Typography gutterBottom sx={{ mt: 4, fontSize: 18, fontWeight: 500, color: "#9B9B9B" }}>
								Based on 77 recommendation.
							</Typography>
							<Typography sx={{ fontSize: 18, fontWeight: 500 }}>
								Would you recommend this item?
							</Typography>
							{/* <Button color="secondary" variant="contained">
								Yes, I will recommend
							</Button>
							<Button color="secondary" variant="outlined">
								No, I will not
							</Button> */}
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithChildren
									value={0}
									styles={buildStyles({
										textColor: "red",
										pathColor: "#E2BC82",
										trailColor: "turquoise",
									})}
								>
									<Rating
										size="small"
										name="simple-controlled"
										value={ratings}
										onChange={(event, newValue) => {
											setRatings(newValue);
										}}
									/>
									<Typography sx={{ mt: 1, fontWeight: 500, opacity: 0.6 }}>Rate it!</Typography>
								</CircularProgressbarWithChildren>
							</Box>
							<Typography sx={{ mt: 4, fontSize: 18, fontWeight: 500 }}>
								Have you purchased this item?
							</Typography>
							{/* <Button color="secondary" variant="contained">
								Write a review
							</Button> */}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</SectionBox>
	);
};

export default RatingsAndReviews;
