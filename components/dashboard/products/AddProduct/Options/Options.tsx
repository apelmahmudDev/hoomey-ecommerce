import { Box, CardContent, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { DeleteRedSvg } from "../../../../icons";
import { BorderFormControl, StyledButton, StyledCard, StyledTextField } from "../../../components/styledComponents";
import { useStyles } from "../styled";

const Options = () => {
	const [filter, setFilter] = useState("10");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Options
				</Typography>
				<Typography sx={{ fontSize: 12, mb: 1.25 }} fontWeight="medium">
					Option name
				</Typography>
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl fullWidth size="small" className={classes.statusSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Color</MenuItem>
							<MenuItem value={20}>Size</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>

				<Typography sx={{ fontSize: 12, mb: 1.25 }} fontWeight="medium">
					Option values
				</Typography>

				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="Grey Ice Kettle" fullWidth required />
					<IconButton>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25 }}>
					<StyledTextField size="small" placeholder="Pink" fullWidth required />
					<IconButton>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25 }}>
					<StyledTextField size="small" placeholder="Blue Ice Kettle" fullWidth required />
					<IconButton>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<Box
					component="form"
					sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25, mb: 1.25 }}
				>
					<StyledTextField size="small" placeholder="White" fullWidth required />
					<IconButton>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<Box
					component="form"
					sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25, mb: 1.25 }}
				>
					<StyledTextField size="small" placeholder="Add another vale" fullWidth required />
					<IconButton sx={{ visibility: "hidden" }} disabled>
						<DeleteRedSvg />
					</IconButton>
				</Box>
				<StyledButton sx={{ px: 2, minWidth: "132px" }} type="submit" variant="contained" color="secondary">
					Done
				</StyledButton>
				<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px", mt: 2 }}>
					Add option
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default Options;
