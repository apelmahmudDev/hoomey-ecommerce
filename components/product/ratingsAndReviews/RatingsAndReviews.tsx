import { Box, Button, Container, Divider, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

import { StarIcon, ThumbUpIcon } from "../../../uiElements/icons";
import { BorderLinearProgress, SectionBox } from "../../styledComponents";
import { CircularProgressbarWithCount, Heading } from "../../ui";
import { sliderData } from "./data";
import RatingsSliderItem from "./RatingsSliderItem";
import RatingsText from "./styledComponent/RatingsText";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Autoplay, Navigation } from "swiper";
import { useStyles } from "./styled";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// disyplay star details
const StarViewProgress = ({
	starTitle,
	progressValue,
	starCount,
}: {
	starTitle: string;
	progressValue: number;
	starCount: number;
}) => {
	return (
		<Box sx={{ my: 1.5, width: "100%", display: "flex", alignItems: "center", gap: 1.2 }}>
			<RatingsText color="#7A7A7A" sx={{ whiteSpace: "nowrap" }}>
				{starTitle}
			</RatingsText>
			<BorderLinearProgress variant="determinate" value={progressValue} />
			<Typography sx={{ color: "#7A7A7A" }} variant="body2">
				{starCount}
			</Typography>
		</Box>
	);
};

const RatingsAndReviews = () => {
	const classes = useStyles();
	const [ratings, setRatings] = useState<number | null>(0);

	// for swiper slieder
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<SectionBox>
			<Container>
				<Heading text="Ratings & Reviews" variant="h6" textAlign="center" mb={5} />
				<Grid container spacing={8}>
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
							<RatingsText sx={{ mt: 4 }}>Based on 365 ratings</RatingsText>
							{/* start count */}
							<Box mb={2} sx={{ width: "100%" }}>
								<StarViewProgress starTitle="5 Star" starCount={173} progressValue={70} />
								<StarViewProgress starTitle="4 Star" starCount={100} progressValue={50} />
								<StarViewProgress starTitle="3 Star" starCount={110} progressValue={60} />
								<StarViewProgress starTitle="2 Star" starCount={20} progressValue={30} />
								<StarViewProgress starTitle="1 Star" starCount={10} progressValue={10} />
							</Box>
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
							<RatingsText sx={{ mt: 4 }} color="#9B9B9B">
								Based on 77 recommendation.
							</RatingsText>
							<RatingsText sx={{ my: 1.2 }}>Would you recommend this item?</RatingsText>
							<Button fullWidth sx={{ fontFamily: "Poppins" }} color="secondary" variant="contained">
								Yes, I will recommend
							</Button>
							<Button fullWidth sx={{ mt: 2.5 }} color="secondary" variant="outlined">
								No, I will not
							</Button>
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
							<Button fullWidth sx={{ mt: 2.5 }} color="secondary" variant="contained">
								Write a review
							</Button>
						</Box>
					</Grid>
				</Grid>
				<Divider sx={{ height: 2, background: "#E3E3E3", my: 6 }} />
				{/* ratings slider */}
				<Swiper
					className={classes.mySwiper}
					navigation={true}
					pagination={pagination}
					modules={[Pagination, Navigation, Autoplay, Lazy]}
					lazy={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					{sliderData.map((comment, idx) => (
						<SwiperSlide key={idx}>
							<RatingsSliderItem comment={comment} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</SectionBox>
	);
};

export default RatingsAndReviews;
