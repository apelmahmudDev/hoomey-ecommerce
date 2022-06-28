import { ArrowSlider } from "../../common";
import { productData } from "./data";

const RelatedProducts = () => {
	return (
		<>
			<ArrowSlider headingText="Related Products" productArr={productData} />
		</>
	);
};

export default RelatedProducts;
