import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	// cart totals
	accordion: {
		margin: "0 !important",
		color: "#656565",
		background: "none !important",
		boxShadow: "none !important",
		"& .MuiAccordionSummary-expandIconWrapper": { "& .MuiSvgIcon-root": { fontSize: "1rem !important" } },
		"& .MuiButtonBase-root, & .MuiAccordionSummary-root": { justifyContent: "flex-start" },
		"& .MuiAccordionSummary-content": { display: "flex", alignItems: "center", flexGrow: 0 },
	},
}));
