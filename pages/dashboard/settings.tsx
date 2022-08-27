import { NextLayoutComponentType } from "next";
import { Settings } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Settings />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
