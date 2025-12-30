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
                loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/pollingStation/${params.id}`),
            },
            {
                path: "/pollingStations/pollingStation/:id",
                element: <PollingStationDetails></PollingStationDetails>,
                loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/pollingStations/pollingStation/${params.id}`),
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
        path: "https://polling-station/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "https://polling-station.netlify.app/dashboard/districts",
            element: <InsertDistrict />,
          },
          {
            path: "https://polling-station.netlify.app/dashboard/upazilas",
            element: <InsertUpazila />,
          },
          {
            path: "https://polling-station.netlify.app/dashboard/unions",
            element: <InsertUnion></InsertUnion>
          },
          {
            path: "https://polling-station.netlify.app/dashboard/pollingStations",
            element: <InsertPollingStationInfo />,
          },
          {
            path: "https://polling-station.netlify.app/dashboard/loadDistricts",
            element: <LoadDistrictInfo></LoadDistrictInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/districts"),
          },
          { /*
            path: "/dashboard/district/:id",
            element: <EditProjects></EditProjects>,
            loader: ({params}) => fetch(`https://my-portfolio-server-blond.vercel.app/project/${params.id}`),
                */
          },
          {
            path: "https://polling-station.netlify.app/dashboard/loadUpazilas",
            element: <LoadUpazilaInfo></LoadUpazilaInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/upazilas"),
          },
          {
            path: "https://polling-station.netlify.app/dashboard/loadUnions",
            element: <LoadUnionInfo></LoadUnionInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/unions"),
          },
          {
            path: "https://polling-station.netlify.app/dashboard/loadPollingStations",
            element: <LoadPollingStationInfo></LoadPollingStationInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
          },
        ],

    },
]);
export default router;