import { Box, CardContent, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { UseFormRegister } from "react-hook-form";

import { StyledCard, StyledTextField } from "../../../components/styledComponents";

interface Inputs {
	name: string;
	slug: string;
	description: string;
	isStatus: string;
}

interface MyProps {
	register: UseFormRegister<Inputs>;
}

const Title = ({ register }: MyProps) => {
	const handleEditorChange = (content: string) => {
		console.log(content);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="Medium">
					Title
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField
						fullWidth
						size="small"
						placeholder="Men"
						{...register("name", { required: true })}
					/>
				</Box>
				<Typography sx={{ fontSize: 18, mt: 1.25, mb: 1.25 }} fontWeight="medium">
					Description (Optional)
				</Typography>

				<Box>
					<>
						<Editor
							apiKey={process.env.NEXT_PUBLIC_TEXT_EDITOR_API_KEY}
							initialValue="<p>Write description here</p>"
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
							onEditorChange={handleEditorChange}
						/>
					</>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Title;
