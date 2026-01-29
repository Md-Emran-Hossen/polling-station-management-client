import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
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
import Bgb from "../pages/Bgb";
import Police from "../pages/Police";
import Rab from "../pages/Rab";
import Army from "../pages/Army";
import InsertArmy from "../lawEnforcement/InsertArmy";
import InsertBgb from "../lawEnforcement/InsertBgb";
import InsertPolice from "../lawEnforcement/InsertPolice";
import InsertRab from "../lawEnforcement/InsertRab";
import LawEnforcementLayout from "../layout/LawEnforcementLayout";
import LoadArmy from "../lawEnforcement/loadArmy";
import LoadBgb from "../lawEnforcement/LoadBgb";
import LoadPolice from "../lawEnforcement/LoadPolice";
import LoadRab from "../lawEnforcement/LoadRab";
import ExecutiveMagistrate from "../pages/ExecutiveMagistrate";
import InsertMagistrate from "../lawEnforcement/InsertMagistrate";
import LoadMagistrate from "../lawEnforcement/LoadMagistrate";
import EditArmy from "../lawEnforcement/EditArmy";
import EditBgb from "../lawEnforcement/EditBgb";
import EditPolice from "../lawEnforcement/EditPolice";
import EditRab from "../lawEnforcement/EditRab";
import EditMagistrate from "../lawEnforcement/EditMagistrate";


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
                path: "/executiveMagistrate",
                element: <ExecutiveMagistrate></ExecutiveMagistrate>,
            },
            {
                path: "/army",
                element: <Army></Army>,
            },
            {
                path: "/bgb",
                element: <Bgb></Bgb>,
            },
             {
                path: "/police",
                element: <Police></Police>,
            },
            {
                path: "/rab",
                element: <Rab></Rab>,
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
            loader: () => fetch("https://polling-station-management-server.vercel.app/prisidingOfficers"),
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
    {
        path: "/lawEnforcement",
        element: <LawEnforcementLayout></LawEnforcementLayout>,
        children: [
          {
            path: "/lawEnforcement/armys",
            element: <InsertArmy></InsertArmy>,
          },
          {
            path: "/lawEnforcement/bgbs",
            element: <InsertBgb></InsertBgb>,
          },
          {
            path: "/lawEnforcement/polices",
            element: <InsertPolice></InsertPolice>,
          },
          {
            path: "/lawEnforcement/rabs",
            element: <InsertRab></InsertRab>,
          },
          {
            path: "/lawEnforcement/magistrates",
            element: <InsertMagistrate></InsertMagistrate>,
          },
          {
            path: "/lawEnforcement/loadArmy",
            element: <LoadArmy></LoadArmy>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/armys"),
          },
          {
            path: "/lawEnforcement/loadBgb",
            element: <LoadBgb></LoadBgb>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/bgbs"),
          },
          {
            path: "/lawEnforcement/loadPolice",
            element: <LoadPolice></LoadPolice>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/polices"),
          },
          {
            path: "/lawEnforcement/loadRab",
            element: <LoadRab></LoadRab>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/rabs"),
          },
          {
            path: "/lawEnforcement/loadMagistrate",
            element: <LoadMagistrate></LoadMagistrate>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/magistrates"),
          },
          {
             path: "/lawEnforcement/army/:id",
             element: <EditArmy></EditArmy>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/army/${params.id}`),
          },
          {
             path: "/lawEnforcement/bgb/:id",
             element: <EditBgb></EditBgb>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/bgb/${params.id}`),
          },
          {
             path: "/lawEnforcement/police/:id",
             element: <EditPolice></EditPolice>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/police/${params.id}`),
          },
          {
             path: "/lawEnforcement/rab/:id",
             element: <EditRab></EditRab>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/rab/${params.id}`),
          },
          {
             path: "/lawEnforcement/magistrate/:id",
             element: <EditMagistrate></EditMagistrate>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/magistrate/${params.id}`),
          },
        ],

    },
]);
export default router;