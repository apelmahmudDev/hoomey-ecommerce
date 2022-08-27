import { Box, Button, CardContent, Checkbox, Divider, FormControlLabel, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "../../../../../uiElements";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Variants = () => {
	const [isTrackChecked, setIsTrackChecked] = useState(true);
	// handle track quantity check
	const handleTrackCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsTrackChecked(event.target.checked);
	};

	return (
		<StyledCard>
			<CardContent>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
						Variants
					</Typography>
					<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px" }} fontWeight="bold">
						Add another Variant
					</Typography>
				</Box>

				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
					<Typography sx={{ fontSize: 14, mb: 1.25, minWidth: "10%" }} fontWeight="semibold" />
					<Typography sx={{ fontSize: 16, mb: 1.25, minWidth: "22%" }} fontWeight="semibold">
						Variant
					</Typography>
					<Typography
						sx={{ fontSize: 16, mb: 1.25, minWidth: "15%", textAlign: "center" }}
						fontWeight="semibold"
					>
						Price
					</Typography>
					<Typography
						sx={{ fontSize: 16, mb: 1.25, minWidth: "15%", textAlign: "center" }}
						fontWeight="semibold"
					>
						Quantity
					</Typography>
					<Typography
						sx={{ fontSize: 16, mb: 1.25, minWidth: "15%", textAlign: "center" }}
						fontWeight="semibold"
					>
						SKU
					</Typography>
					<Typography
						sx={{ fontSize: 14, mb: 1.25, minWidth: "27%", textAlign: "center" }}
						fontWeight="semibold"
					/>
				</Box>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 2 }}>
					<Box sx={{ mt: 1.25, minWidth: "3%" }}>
						<FormControlLabel
							control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
							label={undefined}
						/>
					</Box>
					<Box sx={{ mb: 1.25, minWidth: "26%" }}>
						<Stack direction="row" spacing={1}>
							<Image
								src={IMAGES.TshirtLevisImg}
								height={65}
								width={65}
								objectFit="cover"
								placeholder="blur"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-around",
								}}
							>
								<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
							</Box>
						</Stack>
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="$   38.99" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder=" 50" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="DTO-M-XS" />
					</Box>
					<Box sx={{ mt: 1.25, maxWidth: "20%", minWidth: "15%" }}>
						<Button
							sx={{ borderRadius: "5px" }}
							size="medium"
							fullWidth
							variant="contained"
							color="secondary"
						>
							Edit
						</Button>{" "}
					</Box>
				</Box>
				<Divider variant="middle" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 2 }}>
					<Box sx={{ mt: 1.25, minWidth: "3%" }}>
						<FormControlLabel
							control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
							label={undefined}
						/>
					</Box>
					<Box sx={{ mb: 1.25, minWidth: "26%" }}>
						<Stack direction="row" spacing={1}>
							<Image
								src={IMAGES.JeansJacketImg}
								height={65}
								width={65}
								objectFit="cover"
								placeholder="blur"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-around",
								}}
							>
								<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
							</Box>
						</Stack>
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="$   38.99" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder=" 50" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="DTO-M-XS" />
					</Box>
					<Box sx={{ mt: 1.25, maxWidth: "20%", minWidth: "15%" }}>
						<Button
							sx={{ borderRadius: "5px" }}
							size="medium"
							fullWidth
							variant="contained"
							color="secondary"
						>
							Edit
						</Button>{" "}
					</Box>
				</Box>
				<Divider variant="middle" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 2 }}>
					<Box sx={{ mt: 1.25, minWidth: "3%" }}>
						<FormControlLabel
							control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
							label={undefined}
						/>
					</Box>
					<Box sx={{ mb: 1.25, minWidth: "26%" }}>
						<Stack direction="row" spacing={1}>
							<Image
								src={IMAGES.TshirtLevisImg}
								height={65}
								width={65}
								objectFit="cover"
								placeholder="blur"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-around",
								}}
							>
								<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
							</Box>
						</Stack>
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="$   38.99" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder=" 50" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="DTO-M-XS" />
					</Box>
					<Box sx={{ mt: 1.25, maxWidth: "20%", minWidth: "15%" }}>
						<Button
							sx={{ borderRadius: "5px" }}
							size="medium"
							fullWidth
							variant="contained"
							color="secondary"
						>
							Edit
						</Button>{" "}
					</Box>
				</Box>
				<Divider variant="middle" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 2 }}>
					<Box sx={{ mt: 1.25, minWidth: "3%" }}>
						<FormControlLabel
							control={<Checkbox checked={isTrackChecked} onChange={handleTrackCheckChange} />}
							label={undefined}
						/>
					</Box>
					<Box sx={{ mb: 1.25, minWidth: "26%" }}>
						<Stack direction="row" spacing={1}>
							<Image
								src={IMAGES.JeansJacketImg}
								height={65}
								width={65}
								objectFit="cover"
								placeholder="blur"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-around",
								}}
							>
								<Typography sx={{ fontWeight: "400", fontSize: 14 }}>Lorem Ipsum</Typography>
							</Box>
						</Stack>
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="$   38.99" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="    50" />
					</Box>
					<Box sx={{ mt: 1.25, minWidth: "16%" }}>
						<StyledTextField size="small" required placeholder="DTO-M-XS" />
					</Box>
					<Box sx={{ mt: 1.25, maxWidth: "20%", minWidth: "15%" }}>
						<Button
							sx={{ borderRadius: "5px" }}
							size="medium"
							fullWidth
							variant="contained"
							color="secondary"
						>
							Edit
						</Button>{" "}
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Variants;
