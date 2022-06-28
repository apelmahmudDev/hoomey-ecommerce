import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Paper,
	SelectChangeEvent,
	Stack,
	CardActionArea,
	Divider,
} from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { useStyles } from "./styled";
import { SyntheticEvent, useState } from "react";
import { AddIcon } from "../../../uiElements/icons";
import { FlexStack, ProductCircularColor } from "../../styledComponents";
import { FacebookSvg, InstagramSvg, PinterestSvg, WhatsappSvg } from "../../icons";
import { ArrowLeftIconButton, Link, ArrowRightIconButton, PriceTypography } from "../../ui";
import { data } from "./data";
import { ProductSizeSelect } from "../../common";

const ProductView = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const [size, setSize] = useState("10");

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};

	// console.log(size);

	return (
		<Box mb={9.1}>
			<Container maxWidth="md">
				<Grid container spacing={5}>
					{/* product view image card */}
					<Grid item xs={12} sm={6}>
						<Card sx={{ position: "relative" }}>
							<Box sx={{ background: COLORS.PRODUCT_CARD_BG }}>
								<Image src={IMAGES.WhiteTshirtImg} alt={"Product"} layout="responsive" />
							</Box>
							<Typography className={classes.discountChip}> -{56}%</Typography>
						</Card>

						<Divider sx={{ my: 3 }} />
						{/* justify product */}
						<Box>
							<Grid spacing={1} container>
								{data.map((item, idx) => (
									<Grid key={idx} item xs>
										<Card>
											<CardActionArea>
												<Image
													src={item}
													alt="justify1"
													layout="responsive"
													height={178}
													width={140}
													objectFit="cover"
												/>
											</CardActionArea>
										</Card>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>

					{/* product view details */}
					<Grid item xs={12} sm={6}>
						<Box className={classes.viewTop}>
							<Box sx={{ flex: 1 }}>
								<Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
									White Cotton Sweatshirt{" "}
								</Typography>
								<PriceTypography discount={90} price={500} />
							</Box>
							<Button color="secondary" className={classes.chartBtn}>
								Size Chart
							</Button>
						</Box>

						{/* accordion -> product details expandable */}
						<Box mt={2.5}>
							<Accordion
								className={classes.accordion}
								expanded={expanded === "panel1"}
								onChange={handleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={<AddIcon fontSize="small" />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography>Description</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Made of heavyweight French terry cotton. A traditional athletic staple with a
										more fitted fit. Flatlock seams prevent chafing in sensitive areas, and the
										ribbed crotch gusset provides additional elasticity as your body moves.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								className={classes.accordion}
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={<AddIcon fontSize="small" />}
									aria-controls="panel2bh-content"
									id="panel2bh-header"
								>
									<Typography>Details</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										100% French Terry Cotton, imported from Canada Flatlock stitching on seams Made
										in Los Angeles, designed in New York Crotch gusset with ribs YKK oxidised metal
										zippers in two welt pockets 11 embroidered designs below the right pocket
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								className={classes.accordion}
								expanded={expanded === "panel3"}
								onChange={handleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={<AddIcon fontSize="small" />}
									aria-controls="panel3bh-content"
									id="panel3bh-header"
								>
									<Typography>Size & Care Information</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Model is 6ft tall and is wearing a Medium. Machine wash warm and tumble dry low.
										Bleach is not recommended.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</Box>
						{/*  */}
						<div>
							<Box
								component={Paper}
								sx={{ mt: 2.5, boxShadow: 0, border: "1px solid #D6D4D4", borderRadius: 0 }}
							>
								<FlexStack>
									<Typography className={classes.smallGreyText}>Color</Typography>
									<ProductCircularColor color="#EBEBEB" />
								</FlexStack>
								<FlexStack>
									<Typography className={classes.smallGreyText}>Size</Typography>
									<ProductSizeSelect
										value={size}
										handleSizeChange={handleSizeChange}
										outerFontSize={10}
									/>
								</FlexStack>
								<FlexStack>
									<Typography className={classes.smallGreyText}>Quantity</Typography>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											minWidth: 80,
										}}
									>
										<ArrowLeftIconButton onClick={() => console.log("decrement")} />
										<Typography variant="body2" fontWeight="500">
											1
										</Typography>
										<ArrowRightIconButton onClick={() => console.log("increment")} />
									</Box>
								</FlexStack>
								<Button color="secondary" variant="contained" fullWidth>
									Add to cart
								</Button>
							</Box>
							<Stack sx={{ mt: 1.2 }} direction="row" spacing={1.1}>
								<Link href="/">
									<FacebookSvg />
								</Link>
								<Link href="/">
									<PinterestSvg />
								</Link>
								<Link href="/">
									<InstagramSvg />
								</Link>
								<Link href="/">
									<WhatsappSvg />
								</Link>
							</Stack>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ProductView;