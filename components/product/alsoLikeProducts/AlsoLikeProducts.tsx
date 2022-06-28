import { ArrowSlider } from "../../common";
import { productData } from "./data";

const AlsoLikeProducts = () => {
	return (
		<>
			<ArrowSlider headingText="You may also like" productArr={productData} />
		</>
	);
};

export default AlsoLikeProducts;
