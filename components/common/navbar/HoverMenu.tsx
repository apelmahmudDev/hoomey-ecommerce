import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { SmallText } from "../../styledComponents";
import { Link } from "../../ui";
import CollectionCard from "../CollectionCard";
import { itemData } from "./data";

const HoverMenu: FC = () => {
	return (
		<Paper sx={{ p: 2, display: "flex" }}>
			<Box sx={{ minWidth: 194, borderRight: "1px solid #C4C4C4" }}>
				<Typography gutterBottom variant="body2" whiteSpace="nowrap" fontFamily="Sedan">
					New Products
				</Typography>
				{[
					"Clothing",
					"Shoes",
					"Accessories",
					"Face + Body",
					"Topman",
					"Back in Stock",
					"Outlet",
					"Trending",
				].map((item, idx) => (
					<Link href="/" key={idx}>
						<SmallText
							color="text.secondary"
							sx={{ mt: 1.625 }}
							fontWeight="400"
							variant="body2"
							whiteSpace="nowrap"
						>
							{item}
						</SmallText>
					</Link>
				))}
			</Box>

			<Box sx={{ ml: 1.25, width: "100%" }}>
				<Typography variant="body2" whiteSpace="nowrap" fontFamily="Sedan">
					Trending Categories
				</Typography>
				<Box sx={{ mt: 1.25, display: "flex", gap: 2 }}>
					{itemData.map((item, idx) => (
						<CollectionCard key={idx} item={item} />
					))}
				</Box>
			</Box>
		</Paper>
	);
};

export default HoverMenu;
