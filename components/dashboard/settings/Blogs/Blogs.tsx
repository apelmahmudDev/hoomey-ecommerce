import { Box } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { RoundButton } from "../../../styledComponents";
import { BackIconButton } from "../../../ui";
import BlogsTable from "./BlogsTable";

const Blogs = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 2.5,
				}}
			>
				<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ROOT))}>Blogs</BackIconButton>

				<RoundButton
					sx={{ minWidth: 150 }}
					onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ADD_BLOG))}
					variant="contained"
					color="secondary"
				>
					Add Blog
				</RoundButton>
			</Box>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<BlogsTable />
			</Box>
		</Box>
	);
};

export default Blogs;
