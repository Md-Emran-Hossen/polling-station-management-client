import React from 'react';
import { NavLink } from 'react-router-dom';

const LiveLink = () => {
    return (
         <div className="mx-auto bg-base-200 p-10">
            <ul>
                <li className="text-xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/liveLink/loadMagistrate">
                        ম্যাজিস্ট্রেটের তালিকা
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LiveLink;