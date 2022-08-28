import { useState } from "react";
import ReviewDetails from "./ReviewDetails";
import Reviews from "./Reviews";

// tabs constants
export const REVIEW_TABS = {
	ROOT: "reviews",
	REVIEW_DETAILS: "review_details",
};

function ReviewView() {
	const [tab, setTab] = useState("reviews");

	const handleTabChange = (tab: string) => {
		setTab(tab);
	};

	return (
		<>
			{tab === REVIEW_TABS.ROOT && <Reviews handleTabChange={handleTabChange} />}
			{tab === REVIEW_TABS.REVIEW_DETAILS && <ReviewDetails handleTabChange={handleTabChange} setTab={setTab} />}
		</>
	);
}

export default ReviewView;
