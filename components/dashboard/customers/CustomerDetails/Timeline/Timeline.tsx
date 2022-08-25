import {
	CardContent,
	Typography,
	Box,
	FormControlLabel,
	Stack,
	Checkbox,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { DashboardDivider, RoundButton } from "../../../../styledComponents";
import { AttachmentIcon, SmileIcon } from "../../../components/icons";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Timeline = () => {
	return (
		<StyledCard>
			<CardContent>
				<Stack direction="row" alignItems="center" spacing={2.5} justifyContent="space-between">
					<Typography sx={{ fontSize: 18 }} fontWeight="bold">
						Timeline
					</Typography>
					<FormControlLabel label="Show comments" control={<Checkbox defaultChecked />} />
				</Stack>

				<DashboardDivider sx={{ my: 2.5 }} />

				{/* timeline stepper */}

				<Stepper orientation="vertical">
					<Step>
						<StepLabel>
							<Box sx={{ display: "flex", gap: 2.5, justifyContent: "space-between" }}>
								<span>Customer was created</span>
								<span>
									<time>30 May 2022 at 2:44 pm</time>
								</span>
							</Box>
						</StepLabel>
					</Step>
					<Step>
						<StepLabel>
							<Box sx={{ display: "flex", gap: 2.5, justifyContent: "space-between" }}>
								<span>
									This customer placed Order no. <strong>12345</strong>
								</span>
								<span>
									<time>30 May 2022 at 2:44 pm</time>
								</span>
							</Box>
						</StepLabel>
					</Step>
					<Step>
						<StepLabel>
							<Box sx={{ display: "flex", gap: 2.5, justifyContent: "space-between" }}>
								<span>This customer placed Order no. 12345</span>
								<span>
									<time>30 May 2022 at 2:44 pm</time>
								</span>
							</Box>
						</StepLabel>
					</Step>
				</Stepper>

				<DashboardDivider sx={{ my: 2.5 }} />

				{/* input filed */}
				<Box component="form">
					<Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
						<StyledTextField
							sx={{ flex: 1 }}
							type="search"
							size="small"
							placeholder="Leave your comment..."
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton>
											<AttachmentIcon />
										</IconButton>
										<IconButton>
											<SmileIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<RoundButton sx={{ px: 4 }} type="submit" variant="contained" color="secondary">
							Post
						</RoundButton>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Timeline;
