import { styled } from "@mui/system";

const ProductCircularColor = styled("div")(({ color }: { color: string }) => ({
	position: "relative",
	width: "15px",
	height: "15px",
	cursor: "pointer",
	background: color,
	borderRadius: "100%",
	border: "3px solid #797979",
}));

export default ProductCircularColor;
