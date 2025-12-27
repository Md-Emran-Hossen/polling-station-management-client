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
import InsertUnion from "../dashboard/InsertUnion";
import LoadUnionInfo from "../dashboard/LoadUnionInfo";
import PollingStationDetails from "../pages/PollingStationDetails";


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
                path: "/pollingStation/:id",
                element: <PollingStationDetails></PollingStationDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/pollingStation/${params.id}`),
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
            path: "/dashboard/unions",
            element: <InsertUnion></InsertUnion>
          },
          {
            path: "/dashboard/pollingStations",
            element: <InsertPollingStationInfo />,
          },
          {
            path: "/dashboard/loadDistricts",
            element: <LoadDistrictInfo></LoadDistrictInfo>,
            loader: () => fetch("http://localhost:5000/districts"),
          },
          { /*
            path: "/dashboard/district/:id",
            element: <EditProjects></EditProjects>,
            loader: ({params}) => fetch(`https://my-portfolio-server-blond.vercel.app/project/${params.id}`),
                */
          },
          {
            path: "/dashboard/loadUpazilas",
            element: <LoadUpazilaInfo></LoadUpazilaInfo>,
            loader: () => fetch("http://localhost:5000/upazilas"),
          },
          {
            path: "/dashboard/loadUnions",
            element: <LoadUnionInfo></LoadUnionInfo>,
            loader: () => fetch("http://localhost:5000/unions"),
          },
          {
            path: "/dashboard/loadPollingStations",
            element: <LoadPollingStationInfo></LoadPollingStationInfo>,
            loader: () => fetch("http://localhost:5000/pollingStations"),
          },
        ],

    },
]);
export default router;