import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { toBN } from 'react-en-bn';

const PopulateMagistrate = () => {
    const loadedMagistrateInfo = useLoaderData();
    const [magistrates, setMagistrates] = useState(loadedMagistrateInfo);

    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-xl font-bold text-center mb-10">
                       এক্সিকিউটিভ ম্যাজিস্ট্রেটের সংখ্যা: {toBN(magistrates.length)}
                    </h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                             py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            হোম
                        </button>
                    </Link>
                </div>
                     
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                      <thead>
                        <tr className="bg-green-50 font-bold text-xl text-black">
                            <th>ক্রম</th>
                            <th>উপজেলা</th>
                            <th>নাম</th>
                            <th>পদবি</th>
                            <th>মোবাইল</th>
                            <th>ভোটকেন্দ্র</th>
                            <th>লাইভ লোকেশন</th>
                            <th className="text-center">কার্যক্রম</th>
                        </tr>
                      </thead>
                      <tbody>
                     
                        {magistrates.map((magistrate, index) => (
                        <tr key={magistrate._id || index}
                            className="hover:bg-gray-100"
                        >
                            <td>{toBN(index + 1)}</td>
                            <td>{magistrate.upazilaName}</td>
                            <td>{magistrate.magistrateName}</td>
                            <td>{magistrate.designation}</td>
                            <td>{magistrate.mobile}</td>
                            <td>{magistrate.pollingStations}</td>
                            <td>{magistrate.liveLink}</td>
                            <td>
                                <Link to={`/liveLink/update/magistrate/${magistrate._id}`}>
                                    <button className="btn btn-outline btn-accent text-xs px-5 py-8 m-1">
                                        <HiPencilAlt /> লাইভ লিংক যুক্তকরুন
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PopulateMagistrate;