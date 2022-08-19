import { NextLayoutComponentType } from "next";
import { Orders } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Orders />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
