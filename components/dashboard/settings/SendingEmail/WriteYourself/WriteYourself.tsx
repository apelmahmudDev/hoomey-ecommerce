import { CardContent } from "@mui/material";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../../components/styledComponents";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteYourself = () => {
	// const [editorValue, setEditorValue] = useState("<p>Write here...<br/><br/><br/><br/><br/><br/>");

	return (
		<StyledCard>
			<CardContent>
				<StyledTextBox>
					<StyledLabel fw="500">Subject</StyledLabel>
					<StyledTextField size="small" fullWidth placeholder="Subject" />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Email text</StyledLabel>
					<StyledTextField size="small" multiline rows={4} fullWidth placeholder="Write here..." />
					{/* <AppEditorRoot>
						<ReactQuill theme="snow" value={editorValue} onChange={setEditorValue} />
					</AppEditorRoot> */}
				</StyledTextBox>
			</CardContent>
		</StyledCard>
	);
};

export default WriteYourself;
