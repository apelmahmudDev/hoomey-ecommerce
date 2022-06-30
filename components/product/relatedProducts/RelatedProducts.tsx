import { ProductArrowSlider } from "../../common";
import { productData } from "./data";

const RelatedProducts = () => {
	return (
		<>
			<ProductArrowSlider headingText="Related Products" productArr={productData} />
		</>
	);
};

export default RelatedProducts;
