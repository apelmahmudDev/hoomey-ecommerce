import { IconButton, Typography } from "@mui/material";
import { HoverTooltip } from "../../styledComponents";
import { HintsSvg } from "../../icons";

const HintsHeading = ({
	text,
	variant,
	mb,
}: {
	text: string;
	variant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "button"
		| "overline"
		| "inherit"
		| undefined;
	mb?: string | number;
}) => {
	return (
		<Typography
			textAlign="center"
			gutterBottom
			sx={{ mb: mb || 2.5, fontFamily: "Poppins", fontWeight: 500 }}
			variant={variant || "h6"}
		>
			{text}{" "}
			<HoverTooltip title="These results are based on your searches">
				<IconButton component="span">
					<HintsSvg />
				</IconButton>
			</HoverTooltip>
		</Typography>
	);
};

export default HintsHeading;
