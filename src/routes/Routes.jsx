import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
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
import InsertSummaryInfo from "../dashboard/InsertSummaryInfo";
import LoadSummaryInfo from "../dashboard/LoadSummaryInfo";
import EditPollingStationInfo from "../dashboard/EditPollingStationInfo";
import EditSummaryInfo from "../dashboard/EditSummaryInfo";
import Map from "../pages/Map";
import InsertPrisidingOfficer from "../dashboard/InsertPrisidingOfficer";
import LoadPrisidingOfficer from "../dashboard/LoadPrisidingOfficer";


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
                path: "/map",
                element: <Map></Map>,
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
            path: "/dashboard/summaryInformations",
            element: <InsertSummaryInfo></InsertSummaryInfo>,
          },
           {
            path: "/dashboard/prisidingOfficers",
            element: <InsertPrisidingOfficer></InsertPrisidingOfficer>,
          },
          {
            path: "/dashboard/loadDistricts",
            element: <LoadDistrictInfo></LoadDistrictInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/districts"),
          },
          {
            path: "/dashboard/loadUpazilas",
            element: <LoadUpazilaInfo></LoadUpazilaInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/upazilas"),
          },
          {
            path: "/dashboard/loadUnions",
            element: <LoadUnionInfo></LoadUnionInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/unions"),
          },
          {
            path: "/dashboard/loadPollingStations",
            element: <LoadPollingStationInfo></LoadPollingStationInfo>,
            // loader: () => fetch("http://localhost:5000/pollingStations"),
            loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
          },
          {
            path: "/dashboard/loadSummaryInformations",
            element: <LoadSummaryInfo></LoadSummaryInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/summaryInformations"),
          },
          {
            path: "/dashboard/loadPrisidingOfficers",
            element: <LoadPrisidingOfficer></LoadPrisidingOfficer>,
            loader: () => fetch("http://localhost:5000/prisidingOfficers"),
          },
          {
            path: "/dashboard/pollingStation/:id",
            element: <EditPollingStationInfo></EditPollingStationInfo>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/pollingStation/${params.id}`),
          },
          {
            path: "/dashboard/summaryInformation/:id",
            element: <EditSummaryInfo></EditSummaryInfo>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/summaryInformation/${params.id}`),
          },
        ],

    },
]);
export default router;