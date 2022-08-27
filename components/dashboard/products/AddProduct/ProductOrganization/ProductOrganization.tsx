import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const ProductOrganization = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Product organization
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="bold">
					Types
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" placeholder="Search types" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="bold">
					Vendor
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="bold">
					Collections
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="bold">
					Tags
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
					<StyledTextField size="small" placeholder="Search tags" fullWidth required />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default ProductOrganization;
