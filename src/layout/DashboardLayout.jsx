import { Outlet } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";

const DashboardLayout = () => {
    return(
        <div>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};
export default DashboardLayout;
