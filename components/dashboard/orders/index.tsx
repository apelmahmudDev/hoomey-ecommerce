import Orders from "./Orders";
import AbandonedCart from "./AbandonedCart";
import CreateOrder from "./CreateOrder";

function OrderView() {
	return (
		<>
			<Orders />
			<AbandonedCart />
			<CreateOrder />
		</>
	);
}

export default OrderView;
