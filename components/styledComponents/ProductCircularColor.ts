import { styled } from "@mui/system";

const ProductCircularColor = styled("div")(({ color }: { color: string }) => ({
	background: color,
	height: 15,
	width: 15,
	border: "3px solid #797979",
	borderRadius: 50,
}));

export default ProductCircularColor;
