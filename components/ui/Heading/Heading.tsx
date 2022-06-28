import { Typography } from "@mui/material";

const Heading = ({
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
			sx={{ mb: mb || 3, fontFamily: "Poppins", fontWeight: 500, color: "000000" }}
			variant={variant || "h4"}
		>
			{text}
		</Typography>
	);
};

export default Heading;
