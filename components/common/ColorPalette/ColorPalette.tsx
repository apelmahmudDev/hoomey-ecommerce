import { Box, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/system";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// styled component
const ColorNameText = styled(Typography)({
	fontSize: 12,
	color: "#656565",
});

const styles = {
	height: 50,
	width: 50,
	borderRadius: "50%",
	p: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "3px solid #DADADA",
};

interface State {
	blue: boolean;
	purple: boolean;
	pink: boolean;
	black: boolean;
	red: boolean;
	orange: boolean;
	yellow: boolean;
	green: boolean;
	white: boolean;
	grey: boolean;
	beige: boolean;
	brown: boolean;
	gold: boolean;
	silver: boolean;
}

const ColorCircle = ({ color }: { color: string }) => {
	return <Box sx={{ ...styles, bgcolor: color }} />;
};
const ColorCheckCircle = ({ color }: { color: string }) => {
	return (
		<Box sx={{ ...styles, bgcolor: color }}>
			<CheckIcon fontSize="large" color="secondary" />
		</Box>
	);
};

const ColorPalette = ({
	anchorEl,
	setAnchorElAnchorEl,
}: {
	// eslint-disable-next-line @rushstack/no-new-null
	anchorEl: HTMLButtonElement | null;
	// eslint-disable-next-line @rushstack/no-new-null
	setAnchorElAnchorEl: (isNull: HTMLButtonElement | null) => void;
}) => {
	const [colorCheck, setColorCheck] = useState<State>({
		blue: false,
		purple: false,
		pink: false,
		black: false,
		red: false,
		orange: false,
		yellow: false,
		green: false,
		white: false,
		grey: false,
		beige: false,
		brown: false,
		gold: false,
		silver: false,
	});

	const handleChangeColor = (color: string) => {
		console.log(color);
		switch (color) {
			case "blue":
				setColorCheck({
					...colorCheck,
					blue: !colorCheck.blue,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "purple":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: !colorCheck.purple,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "pink":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: !colorCheck.pink,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "black":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: !colorCheck.black,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "red":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: !colorCheck.red,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "orange":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: !colorCheck.orange,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "yellow":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: !colorCheck.yellow,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "green":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: !colorCheck.green,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "white":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: !colorCheck.white,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "grey":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: !colorCheck.grey,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "beige":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: !colorCheck.beige,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "brown":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: !colorCheck.brown,
					gold: false,
					silver: false,
				});
				break;
			case "gold":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: !colorCheck.gold,
					silver: false,
				});
				break;
			case "silver":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: !colorCheck.silver,
				});
				break;
			default:
				break;
		}
	};

	// handle color palette handler
	const handleCloseColorPalette = () => {
		setAnchorElAnchorEl(null);
	};

	const isColorPaletteOpen = Boolean(anchorEl);
	const id = isColorPaletteOpen ? "simple-popover" : undefined;

	return (
		<Popover
			id={id}
			open={isColorPaletteOpen}
			anchorEl={anchorEl}
			onClose={handleCloseColorPalette}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
		>
			<Box
				className="color-palette"
				sx={{
					p: 2,
					// width: "100%",
					maxWidth: 310,
					// zIndex: "tooltip",
					display: "flex",
					flexWrap: "wrap",
					bgcolor: "common.white",
					border: "1px solid #ddd",
				}}
			>
				{/* arrow indicator -extra*/}
				{/* <Box className="color-palette-arrow" /> */}

				{/* blue color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.blue}
						onClick={() => handleChangeColor("blue")}
						{...label}
						icon={<ColorCircle color="#364C9B" />}
						checkedIcon={<ColorCheckCircle color="#364C9B" />}
					/>
					<ColorNameText>Blue</ColorNameText>
				</Box>
				{/* purple color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.purple}
						onClick={() => handleChangeColor("purple")}
						{...label}
						icon={<ColorCircle color="#963DA7" />}
						checkedIcon={<ColorCheckCircle color="#963DA7" />}
					/>
					<ColorNameText>Purple</ColorNameText>
				</Box>
				{/* pink color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.pink}
						onClick={() => handleChangeColor("pink")}
						{...label}
						icon={<ColorCircle color="#CE4589" />}
						checkedIcon={<ColorCheckCircle color="#CE4589" />}
					/>
					<ColorNameText>Pink</ColorNameText>
				</Box>
				{/* black color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.black}
						onClick={() => handleChangeColor("black")}
						{...label}
						icon={<ColorCircle color="#010101" />}
						checkedIcon={<ColorCheckCircle color="#010101" />}
					/>
					<ColorNameText>Black</ColorNameText>
				</Box>
				{/* red color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.red}
						onClick={() => handleChangeColor("red")}
						{...label}
						icon={<ColorCircle color="#C81818" />}
						checkedIcon={<ColorCheckCircle color="#C81818" />}
					/>
					<ColorNameText>Red</ColorNameText>
				</Box>
				{/* orange color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.orange}
						onClick={() => handleChangeColor("orange")}
						{...label}
						icon={<ColorCircle color="#DA851B" />}
						checkedIcon={<ColorCheckCircle color="#DA851B" />}
					/>
					<ColorNameText>Orange</ColorNameText>
				</Box>
				{/* yellow color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.yellow}
						onClick={() => handleChangeColor("yellow")}
						{...label}
						icon={<ColorCircle color="#FFDB00" />}
						checkedIcon={<ColorCheckCircle color="#FFDB00" />}
					/>
					<ColorNameText>Yellow</ColorNameText>
				</Box>
				{/* green color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.green}
						onClick={() => handleChangeColor("green")}
						{...label}
						icon={<ColorCircle color="#189418" />}
						checkedIcon={<ColorCheckCircle color="#189418" />}
					/>
					<ColorNameText>Green</ColorNameText>
				</Box>
				{/* white color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.white}
						onClick={() => handleChangeColor("white")}
						{...label}
						icon={<ColorCircle color="#FFFFFF" />}
						checkedIcon={<ColorCheckCircle color="#FFFFFF" />}
					/>
					<ColorNameText>White</ColorNameText>
				</Box>
				{/* beige color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.beige}
						onClick={() => handleChangeColor("beige")}
						{...label}
						icon={<ColorCircle color="#BDA672" />}
						checkedIcon={<ColorCheckCircle color="#BDA672" />}
					/>
					<ColorNameText>Beige</ColorNameText>
				</Box>
				{/* brown color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.brown}
						onClick={() => handleChangeColor("brown")}
						{...label}
						icon={<ColorCircle color="#714B26" />}
						checkedIcon={<ColorCheckCircle color="#714B26" />}
					/>
					<ColorNameText>Brown</ColorNameText>
				</Box>
				{/* gold color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.gold}
						onClick={() => handleChangeColor("gold")}
						{...label}
						icon={<ColorCircle color="#FBCB00" />}
						checkedIcon={<ColorCheckCircle color="#FBCB00" />}
					/>
					<ColorNameText>Gold</ColorNameText>
				</Box>
				{/* silver color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.silver}
						onClick={() => handleChangeColor("silver")}
						{...label}
						icon={<ColorCircle color="#E0E0E0" />}
						checkedIcon={<ColorCheckCircle color="#E0E0E0" />}
					/>
					<ColorNameText>Silver</ColorNameText>
				</Box>
			</Box>
		</Popover>
	);
};

export default ColorPalette;
