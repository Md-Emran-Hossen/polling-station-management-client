import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
         <div className="mx-auto bg-base-200 p-10">
            <ul>
                {/* <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/districts" >
                        জেলা যুক্তকরুন
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/upazilas">
                        উপজেলা যুক্তকরুন
                    </NavLink>
                </li>
                   <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/unions">
                        ইউনিয়ন যুক্তকরুন
                    </NavLink>
                </li> */}
                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dashboard/pollingStations">
                        ভোটকেন্দ্র যুক্তকরুন
                    </NavLink>
                </li>
                 {/* <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/prisidingOfficers">
                        ভোটগ্রহণকারী কর্মকর্তা সংরক্ষণ
                    </NavLink>
                </li> */}
                  {/* <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/EditPollingStations">
                        ভোটকেন্দ্র সংশোধন
                    </NavLink>
                </li> */}
                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dashboard/summaryInformations">
                        সারসংক্ষেপ যুক্তকরুন
                    </NavLink>
                </li>

                {/* <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadDistricts">
                        জেলার তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadUpazilas">
                        উপজেলার তালিকা
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadUnions">
                        ইউনিয়নের তালিকা
                    </NavLink>
                </li> */}
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadPollingStations">
                        ভোটকেন্দ্রের তালিকা
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadSummaryInformations">
                        সারসংক্ষেপ প্রদর্শন
                    </NavLink>
                </li>
                {/* <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/loadPrisidingOfficers">
                        ভোটগ্রহণকারী কর্মকর্তার তথ্য প্রদর্শন
                    </NavLink>
                </li> */}
            </ul>
        </div>
    );
};

export default Dashboard;