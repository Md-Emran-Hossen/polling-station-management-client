import React from 'react';
import { NavLink } from 'react-router-dom';

const DataEntry = () => {
    return (
         <div className="mx-auto bg-base-200 p-10">
            <ul>
                {/* <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/districts" >
                        জেলা যুক্তকরুন
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/upazilas">
                        উপজেলা যুক্তকরুন
                    </NavLink>
                </li> */}
                   <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dataEntry/unions">
                        ইউনিয়ন যুক্তকরুন
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dataEntry/pollingStations">
                        ভোটকেন্দ্র যুক্তকরুন
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dataEntry/summaryInformations">
                        সারসংক্ষেপ যুক্তকরুন
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dataEntry/maps">
                        ম্যাপ লিংক যুক্তকরুন
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/dataEntry/fileUpload">
                        এক্সেল ফাইল ইম্পোর্ট করুন
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

                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadDistricts">
                        জেলার তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadUpazilas">
                        উপজেলার তালিকা
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadUnions">
                        ইউনিয়নের তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadPollingStations">
                        ভোটকেন্দ্রের তালিকা
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadSummaryInformations">
                        সারসংক্ষেপ প্রদর্শন
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadMaps">
                        ম্যাপের তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dataEntry/loadData">
                        এক্সেল ফাইল ডেটা প্রদর্শন
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

export default DataEntry;