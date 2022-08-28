import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { CardContent } from "@mui/material";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../../components/styledComponents";

const WriteYourself = () => {
	const editorRef = useRef("test");

	return (
		<StyledCard>
			<CardContent>
				<StyledTextBox>
					<StyledLabel fw="500">Subject</StyledLabel>
					<StyledTextField size="small" fullWidth placeholder="Subject" />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Email text</StyledLabel>
					{/* <StyledTextField size="small" multiline rows={4} fullWidth placeholder="Write here..." /> */}
					<Editor
						apiKey="x9lygirk5iz8k0f5tv17jrnabz3ckd46ewl672tyvhr87pdk"
						onInit={(evt, editor) => (editorRef.current = "test")}
						initialValue="<p>Write description here...</p>"
						init={{
							height: 200,
							menubar: false,
							plugins: [
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"preview",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"codesample",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"code",
								"help",
							],
							statusbar: false,
							toolbar_location: "bottom",
							toolbar:
								" blocks " +
								"bold italic underline forecolor  alignleft aligncenter alignright alignjustify " +
								" link image media | | | code",
							content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
					/>
				</StyledTextBox>
			</CardContent>
		</StyledCard>
	);
};

export default WriteYourself;
