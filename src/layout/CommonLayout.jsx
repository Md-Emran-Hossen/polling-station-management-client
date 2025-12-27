import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import PollingStations from "../pages/PollingStations";

const CommonLayout = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <PollingStations></PollingStations> */}
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;