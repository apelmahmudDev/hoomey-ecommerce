import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ShoppingBagOutlinedIcon } from "../../../uiElements/icons";
import { useStyles } from "./styled";

const CartButton = ({ onClick, badgeContent = 1 }: { onClick: () => void; badgeContent: string | number }) => {
	const classes = useStyles();

	return (
		<Button onClick={onClick} sx={{ bgcolor: "#E2BC82" }} className={classes.cartButton}>
			<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<ShoppingBagOutlinedIcon />
					<Typography sx={{ fontFamily: "Euclid Circular A" }}>Cart</Typography>
				</Box>
				<Typography sx={{ fontFamily: "Euclid Circular A" }} className={classes.cartBtnBadge}>
					{badgeContent}
				</Typography>
			</Stack>
		</Button>
	);
};

export default CartButton;
