import { Box, CardContent, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const ShortDescription = () => {
	const editorRef = useRef(null);
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Title
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" fullWidth required placeholder="White Sweatshirt" />
				</Box>
				<Typography sx={{ fontSize: 18, mt: 1.25, mb: 1.25 }} fontWeight="bold">
					Short Description
				</Typography>

				<Box>
					<>
						<Editor
							apiKey="x9lygirk5iz8k0f5tv17jrnabz3ckd46ewl672tyvhr87pdk"
							onInit={(evt, editor) => (editorRef.current = editor)}
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
					</>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default ShortDescription;
