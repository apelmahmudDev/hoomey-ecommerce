import { NextLayoutComponentType } from "next";
import { Shipping } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Shipping />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
