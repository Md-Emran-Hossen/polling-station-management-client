import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import DashboardLayout from "../layout/DashboardLayout";
import DataEntryLayout from "../layout/DataEntryLayout";
import Home from "../pages/Home";
import Summary from "../pages/Summary";

// import InsertDistrict from "../dashboard/InsertDistrict";
// import InsertUpazila from "../dashboard/InsertUpazila";
// import InsertPollingStationInfo from "../dashboard/InsertPollingStationInfo";
// import LoadDistrictInfo from "../dashboard/LoadDistrictInfo";
// import LoadUpazilaInfo from "../dashboard/LoadUpazilaInfo";
// import LoadPollingStationInfo from "../dashboard/LoadPollingStationInfo";
// import InsertUnion from "../dashboard/InsertUnion";
// import LoadUnionInfo from "../dashboard/LoadUnionInfo";
// import InsertSummaryInfo from "../dashboard/InsertSummaryInfo";
// import LoadSummaryInfo from "../dashboard/LoadSummaryInfo";
// import EditPollingStationInfo from "../dashboard/EditPollingStationInfo";
// import EditSummaryInfo from "../dashboard/EditSummaryInfo";
// import InsertPrisidingOfficer from "../dashboard/InsertPrisidingOfficer";
// import LoadPrisidingOfficer from "../dashboard/LoadPrisidingOfficer";
// import EditUnion from "../dashboard/EditUnion";
// import EditUpazila from "../dashboard/EditUpazila";
// import EditDistrict from "../dashboard/EditDistrict";

import Map from "../pages/Map";
import PollingStationDetails from "../pages/PollingStationDetails";

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


import InsertDistrict from "../dataEntry/InsertDistrict";
import InsertUpazila from "../dataEntry/InsertUpazila";
import InsertPollingStationInfo from "../dataEntry/InsertPollingStationInfo";
import LoadDistrictInfo from "../dataEntry/LoadDistrictInfo";
import LoadUpazilaInfo from "../dataEntry/LoadUpazilaInfo";
import LoadPollingStationInfo from "../dataEntry/LoadPollingStationInfo";
import InsertUnion from "../dataEntry/InsertUnion";
import LoadUnionInfo from "../dataEntry/LoadUnionInfo";
import InsertSummaryInfo from "../dataEntry/InsertSummaryInfo";
import LoadSummaryInfo from "../dataEntry/LoadSummaryInfo";
import EditPollingStationInfo from "../dataEntry/EditPollingStationInfo";
import EditSummaryInfo from "../dataEntry/EditSummaryInfo";
import InsertPrisidingOfficer from "../dataEntry/InsertPrisidingOfficer";
import LoadPrisidingOfficer from "../dataEntry/LoadPrisidingOfficer";
import EditUnion from "../dataEntry/EditUnion";
import EditUpazila from "../dataEntry/EditUpazila";
import EditDistrict from "../dataEntry/EditDistrict";
import InsertMapInfo from "../dataEntry/InsertMapInfo";
import LoadMaps from "../dataEntry/LoadMaps";
import EditMap from "../dataEntry/EditMap";
import InsertContactInfo from "../lawEnforcement/InsertContactInfo";
import LoadContactInfo from "../lawEnforcement/LoadContactInfo";
import EditContactInfo from "../lawEnforcement/EditContactInfo";
import Contacts from "../pages/Contacts";
import LiveLinkLayout from "../layout/LiveLinkLayout";
import UpdateMagistrate from "../liveLink/UpdateMagistrate";
import PopulateMagistrate from "../liveLink/PopulateMagistrate";
import InsertFileData from "../dataEntry/InsertFileData";
import LoadFileData from "../dataEntry/LoadFileData";
import InsertJudicialMagistrate from "../lawEnforcement/InsertJudicialMagistrate"
import LoadJudicialMagistrate from "../lawEnforcement/LoadJudicialMagistrate";
import EditJudicialMagistrate from "../lawEnforcement/EditJudicialMagistrate";
import JudicialMagistrate from "../pages/JudicialMagistrate";
import PopulateJudicialMagistrate from "../liveLink/PopulateJudicialMagistrate"
import UpdateJudicialMagistrate from "../liveLink/UpdateJudicialMagistrate";


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
            {
                path: "/contacts",
                element: <Contacts></Contacts>,
            },
            {
                path: "/judicialMagistrate",
                element: <JudicialMagistrate></JudicialMagistrate>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          // {
          //   path: "/dashboard/districts",
          //   element: <InsertDistrict />,
          // },
          // {
          //   path: "/dashboard/upazilas",
          //   element: <InsertUpazila />,
          // },
          // {
          //   path: "/dashboard/unions",
          //   element: <InsertUnion></InsertUnion>
          // },
          // {
          //   path: "/dashboard/pollingStations",
          //   element: <InsertPollingStationInfo />,
          // },
          // {
          //   path: "/dashboard/summaryInformations",
          //   element: <InsertSummaryInfo></InsertSummaryInfo>,
          // },
          // {
          //   path: "/dashboard/prisidingOfficers",
          //   element: <InsertPrisidingOfficer></InsertPrisidingOfficer>,
          // },
          // {
          //   path: "/dashboard/loadDistricts",
          //   element: <LoadDistrictInfo></LoadDistrictInfo>,
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/districts"),
          // },
          // {
          //   path: "/dashboard/loadUpazilas",
          //   element: <LoadUpazilaInfo></LoadUpazilaInfo>,
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/upazilas"),
          // },
          // {
          //   path: "/dashboard/loadUnions",
          //   element: <LoadUnionInfo></LoadUnionInfo>,
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/unions"),
          // },
          // {
          //   path: "/dashboard/loadPollingStations",
          //   element: <LoadPollingStationInfo></LoadPollingStationInfo>,
          //   // loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
          // },
          // {
          //   path: "/dashboard/loadSummaryInformations",
          //   element: <LoadSummaryInfo></LoadSummaryInfo>,
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/summaryInformations"),
          // },
          // {
          //   path: "/dashboard/loadPrisidingOfficers",
          //   element: <LoadPrisidingOfficer></LoadPrisidingOfficer>,
          //   loader: () => fetch("https://polling-station-management-server.vercel.app/prisidingOfficers"),
          // },
          // {
          //   path: "/dashboard/pollingStation/:id",
          //   element: <EditPollingStationInfo></EditPollingStationInfo>,
          //   loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/pollingStation/${params.id}`),
          // },
          // {
          //   path: "/dashboard/summaryInformation/:id",
          //   element: <EditSummaryInfo></EditSummaryInfo>,
          //   loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/summaryInformation/${params.id}`),
          // },
          // {
          //   path: "/dashboard/union/:id",
          //   element: <EditUnion></EditUnion>,
          //   loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/union/${params.id}`),
          // },
          // {
          //   path: "/dashboard/upazila/:id",
          //   element: <EditUpazila></EditUpazila>,
          //   loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/upazila/${params.id}`),
          // },
          // {
          //   path: "/dashboard/district/:id",
          //   element: <EditDistrict></EditDistrict>,
          //   loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/district/${params.id}`),
          // },
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
            path: "/lawEnforcement/contacts",
            element: <InsertContactInfo></InsertContactInfo>,
          },
          {
            path: "/lawEnforcement/judicialMagistrates",
            element: <InsertJudicialMagistrate></InsertJudicialMagistrate>,
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
            path: "/lawEnforcement/loadContacts",
            element: <LoadContactInfo></LoadContactInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/contacts"),
          },
          {
            path: "/lawEnforcement/loadJudicialMagistrate",
            element: <LoadJudicialMagistrate></LoadJudicialMagistrate>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/judicial/magistrates"),
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
          {
             path: "/lawEnforcement/contact/:id",
             element: <EditContactInfo></EditContactInfo>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/contact/${params.id}`),
          },
          {
             path: "/lawEnforcement/judicialMagistrate/:id",
             element: <EditJudicialMagistrate></EditJudicialMagistrate>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/judicial/magistrate/${params.id}`),
          },
        ],
    },
    {
        path: "/dataEntry",
        element: <DataEntryLayout></DataEntryLayout>,
        children: [
          {
            path: "/dataEntry/districts",
            element: <InsertDistrict />,
          },
          {
            path: "/dataEntry/upazilas",
            element: <InsertUpazila />,
          },
          {
            path: "/dataEntry/unions",
            element: <InsertUnion></InsertUnion>
          },
          {
            path: "/dataEntry/pollingStations",
            element: <InsertPollingStationInfo />,
          },
          {
            path: "/dataEntry/summaryInformations",
            element: <InsertSummaryInfo></InsertSummaryInfo>,
          },
          {
            path: "/dataEntry/prisidingOfficers",
            element: <InsertPrisidingOfficer></InsertPrisidingOfficer>,
          },
          {
            path: "/dataEntry/maps",
            element: <InsertMapInfo></InsertMapInfo>,
          },
          {
            path: "/dataEntry/fileUpload",
            element: <InsertFileData></InsertFileData>,
          },
          {
            path: "/dataEntry/loadDistricts",
            element: <LoadDistrictInfo></LoadDistrictInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/districts"),
          },
          {
            path: "/dataEntry/loadUpazilas",
            element: <LoadUpazilaInfo></LoadUpazilaInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/upazilas"),
          },
          {
            path: "/dataEntry/loadUnions",
            element: <LoadUnionInfo></LoadUnionInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/unions"),
          },
          {
            path: "/dataEntry/loadPollingStations",
            element: <LoadPollingStationInfo></LoadPollingStationInfo>,
            // loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
            loader: () => fetch("https://polling-station-management-server.vercel.app/pollingStations"),
          },
          {
            path: "/dataEntry/loadSummaryInformations",
            element: <LoadSummaryInfo></LoadSummaryInfo>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/summaryInformations"),
          },
          {
            path: "/dataEntry/loadPrisidingOfficers",
            element: <LoadPrisidingOfficer></LoadPrisidingOfficer>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/prisidingOfficers"),
          },
          {
            path: "/dataEntry/loadMaps",
            element: <LoadMaps></LoadMaps>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/maps"),
          },
          {
            path: "/dataEntry/loadData",
            element: <LoadFileData></LoadFileData>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/file"),
          },
          {
            path: "/dataEntry/pollingStation/:id",
            element: <EditPollingStationInfo></EditPollingStationInfo>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/pollingStation/${params.id}`),
          },
          {
            path: "/dataEntry/summaryInformation/:id",
            element: <EditSummaryInfo></EditSummaryInfo>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/summaryInformation/${params.id}`),
          },
          {
            path: "/dataEntry/union/:id",
            element: <EditUnion></EditUnion>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/union/${params.id}`),
          },
          {
            path: "/dataEntry/upazila/:id",
            element: <EditUpazila></EditUpazila>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/upazila/${params.id}`),
          },
          {
            path: "/dataEntry/district/:id",
            element: <EditDistrict></EditDistrict>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/district/${params.id}`),
          },
          {
            path: "/dataEntry/map/:id",
            element: <EditMap></EditMap>,
            loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/${params.id}`),
          },
        ],

    },
    {
        path: "/liveLink",
        element: <LiveLinkLayout></LiveLinkLayout>,
        children: [
          {
            path: "/liveLink/loadMagistrate",
            element: <PopulateMagistrate></PopulateMagistrate>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/magistrates"),
          },
          {
             path: "/liveLink/update/magistrate/:id",
             element: <UpdateMagistrate></UpdateMagistrate>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/magistrate/${params.id}`),
          },
          {
            path: "/liveLink/loadJudicialMagistrate",
            element: <PopulateJudicialMagistrate></PopulateJudicialMagistrate>,
            loader: () => fetch("https://polling-station-management-server.vercel.app/judicial/magistrates"),
          },
          {
             path: "/liveLink/update/judicialMagistrate/:id",
             element: <UpdateJudicialMagistrate></UpdateJudicialMagistrate>,
             loader: ({params}) => fetch(`https://polling-station-management-server.vercel.app/judicial/magistrate/${params.id}`),
          },
        ],
    },
]);
export default router;