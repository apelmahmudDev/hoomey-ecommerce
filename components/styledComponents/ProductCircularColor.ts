import { styled } from "@mui/system";

const ProductCircularColor = styled("div")(({ color }: { color: string }) => ({
	background: color,
	height: "15px",
	width: "15px",
	border: "3px solid #797979",
	borderRadius: "100%",
}));

export default ProductCircularColor;
