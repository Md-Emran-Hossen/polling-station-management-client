import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import PublicNotice from "../pages/PublicNotice";
import Summary from "../pages/Summary";
import EmergencyMobileNumber from "../pages/EmergencyMobileNumber";
import PrintDownload from "../pages/PrintDownload";
import Contact from "../pages/Contact";
import InsertDistrict from "../dashboard/InsertDistrict";
import InsertUpazila from "../dashboard/InsertUpazila";
import InsertPollingStationInfo from "../dashboard/InsertPollingStationInfo";
import LoadDistrictInfo from "../dashboard/LoadDistrictInfo";
import LoadUpazilaInfo from "../dashboard/LoadUpazilaInfo";
import LoadPollingStationInfo from "../dashboard/LoadPollingStationInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout></CommonLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/publicNotice",
                element: <PublicNotice></PublicNotice>,
            },
            {
                path: "/summary",
                element: <Summary></Summary>,
            },
            {
                path: "/emaergencyMobileNumber",
                element: <EmergencyMobileNumber></EmergencyMobileNumber>,
            },
            {
                path: "/printDownload",
                element: <PrintDownload></PrintDownload>,
            },
              {
                path: "/contact",
                element: <Contact></Contact>,
            },
           
        ],
    },
    {
       
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard/districts",
            element: <InsertDistrict />,
          },
          {
            path: "/dashboard/upazilas",
            element: <InsertUpazila />,
          },
          {
            path: "/dashboard/pollingStations",
            element: <InsertPollingStationInfo />,
          },
          {
            path: "/dashboard/loadDistricts",
            element: <LoadDistrictInfo></LoadDistrictInfo>,
          //  loader: () => fetch("https://my-portfolio-server-blond.vercel.app/projects"),
          },
          { /*
            path: "/dashboard/district/:id",
            element: <EditProjects></EditProjects>,
            loader: ({params}) => fetch(`https://my-portfolio-server-blond.vercel.app/project/${params.id}`),
                */
          },
          {
            path: "/dashboard/loadUpazila",
            element: <LoadUpazilaInfo></LoadUpazilaInfo>,
          //  loader: () => fetch("https://my-portfolio-server-blond.vercel.app/technologies"),
          },
          {
            path: "/dashboard/loadPollingStation",
            element: <LoadPollingStationInfo></LoadPollingStationInfo>,
        //    loader: () => fetch("https://my-portfolio-server-blond.vercel.app/services"),
          },
        ],

    },
]);
export default router;