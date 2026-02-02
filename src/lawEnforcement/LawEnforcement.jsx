import React from 'react';
import { NavLink } from 'react-router-dom';

const LawEnforcement = () => {
    return (
          <div className="mx-auto bg-base-200 p-10">
            <ul>
            <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/armys">
                        আর্মি
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/bgbs">
                        বিজিবি
                    </NavLink>
                </li>
                   <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/polices">
                        পুলিশ
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/rabs">
                        র‍্যাব
                    </NavLink>
                </li>   
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/magistrates">
                        ম্যাজিস্ট্রেট
                    </NavLink>
                </li>             

                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/loadArmy">
                        আর্মির তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/loadBgb">
                        বিজিবির তালিকা
                    </NavLink>
                </li>
                 <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/loadPolice">
                        পুলিশের তালিকা
                    </NavLink>
                </li>
                <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/loadRab">
                        র‍্যাবের তালিকা
                    </NavLink>
                </li>
                  <li className="text-xl font-bold text-blue-500 m-2 p-2">
                    <NavLink to="/lawEnforcement/loadMagistrate">
                        ম্যাজিস্ট্রেটের তালিকা
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LawEnforcement;