import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { toBN } from 'react-en-bn';
import { useEffect } from 'react';

const PopulateJudicialMagistrate = () => {
    const loadedMagistrateInfo = useLoaderData();
    const [jmagistrates, setJmagistrates] = useState(loadedMagistrateInfo);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState("");

     // Load Upazila
                         useEffect(() => { 
                           fetch("https://polling-station-management-server.vercel.app/upazilas")
                             .then(res => res.json())
                             .then(data => setUpazilas(data));
                         }, []);
                
                        // Load by selected Upazila items (all or filtered)
                            useEffect(() => {
                                let url = "https://polling-station-management-server.vercel.app/judicial/magistrates";
                                 if (selectedUpazila) {
                                   url += `/upazila/${selectedUpazila}`;
                                 }
                                 fetch(url)
                                   .then(res => res.json())
                                   .then(data => setJmagistrates(data));
                            }, [selectedUpazila]);

    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">

                
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-xl font-bold text-center mb-10">
                        জুডিশিয়াল ম্যাজিস্ট্রেটের সংখ্যা: {toBN(jmagistrates.length)}
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

                <div className="form-control sm:w-1/4 border border-indigo-400 m-10 p-2">
                        <div className='flex justify-center items-center max-w-xs'>
                            <select
                            value={selectedUpazila}
                            // disabled={true}
                            onChange={(e) => setSelectedUpazila(e.target.value)}
                            >
                            <option value=""> উপজেলা নির্বাচন করুন </option>
                            {upazilas.map(upa => (
                                <option key={upa._id} value={upa._id}>
                                {upa.upazilaName}
                                </option>
                            ))}
                            </select>
                        </div>
                    </div>  
                     
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                      <thead>
                        <tr className="bg-green-50 font-bold text-xl text-black">
                            <th className="text-center">লাইভ লোকেশন</th>
                            <th>ক্রম</th>
                            <th>উপজেলা</th>
                            <th>নাম</th>
                            <th>পদবি</th>
                            <th>মোবাইল</th>
                            <th>অধিক্ষেত্র</th>
                        </tr>
                      </thead>
                      <tbody>
                     
                        {jmagistrates.map((magistrate, index) => (
                        <tr key={magistrate._id || index}
                            className="hover:bg-gray-100"
                        >
                            <td>
                                <Link to={`/liveLink/update/judicialMagistrate/${magistrate._id}`}>
                                    <button className="btn btn-outline btn-accent text-xs px-5 py-8 m-1">
                                        <HiPencilAlt /> লাইভ লিংক যুক্তকরুন
                                    </button>
                                </Link>
                            </td>
                            <td>{toBN(index + 1)}</td>
                            <td>{magistrate.upazilaName}</td>
                            <td>{magistrate.magistrateName}</td>
                            <td>{magistrate.designation}</td>
                            <td>{magistrate.mobile}</td>
                            <td>{magistrate.attachedArea}</td>
                            {/* <td>{magistrate.liveLink}</td> */}
                        </tr>
                        ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PopulateJudicialMagistrate;