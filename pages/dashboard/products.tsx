import { NextLayoutComponentType } from "next";
import { Products } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Products />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
