import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
         <div className="w-3/4 mx-auto bg-base-200 p-10">
            <ul>
            <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/districts" >
                        জেলা
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/upazilas">
                        উপজেলা
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/pollingStations">
                        ভোটকেন্দ্র
                    </NavLink>
                </li>

                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadDistricts">
                        জেলাসমূহ
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadUpazila">
                        উপজেলাসমূহ
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadPollingStation">
                        ভোটকেন্দ্রসমূহ
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;