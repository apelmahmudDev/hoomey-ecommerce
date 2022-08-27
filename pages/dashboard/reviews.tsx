import { NextLayoutComponentType } from "next";
import { Reviews } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Reviews />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
