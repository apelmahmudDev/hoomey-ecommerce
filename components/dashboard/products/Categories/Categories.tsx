import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { RoundButton } from "../../../styledComponents";
import { BackIconButton, Link } from "../../../ui";
import CategoryTable from "./CategoryTable";

const Categories = () => {
	const router = useRouter();

	return (
		<div>
			<Box
				sx={{
					mb: 2,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<BackIconButton onClick={() => router.back()}>Category</BackIconButton>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<Link
						href={`${ROUTING_TREE.DASHBOARD.PRODUCTS.CATEGORY.ROOT}/${ROUTING_TREE.DASHBOARD.PRODUCTS.CATEGORY.ADD}`}
					>
						<RoundButton variant="contained" color="secondary">
							Add Category
						</RoundButton>
					</Link>
				</Box>
			</Box>
			{/* table section */}
			<Box my={2.5}>
				<CategoryTable />
			</Box>
		</div>
	);
};
export default Categories;
