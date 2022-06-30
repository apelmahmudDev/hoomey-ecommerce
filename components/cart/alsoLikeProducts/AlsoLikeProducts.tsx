import { ProductArrowSlider } from "../../common";
import { productData } from "./data";

const AlsoLikeProducts = () => {
	return (
		<>
			<ProductArrowSlider headingText="You may also like" productArr={productData} />
		</>
	);
};

export default AlsoLikeProducts;
