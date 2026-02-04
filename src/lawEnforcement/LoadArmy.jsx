import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

const LoadArmy = () => {

    const loadedArmyInfo = useLoaderData();
    const [armys, setArmys] = useState(loadedArmyInfo);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://polling-station-management-server.vercel.app/army/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Army Info deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = armys.filter((army) => army._id !== _id);
                    setArmys(remainingData);
                }
            });
    };


    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
                   <div className="mt-14 mx-2 my-5 justify-center">
                       <div className="flex justify-center justify-items-center">
                           <h1 className="text-xl font-bold text-center mb-10">
                               মোট সেনাবাহিনী: {armys.length}
                           </h1>
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           <Link to="/">
                               <button
                                   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
               py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                               >
                                   Home
                               </button>
                           </Link>
                       </div>
       
                       <div className="overflow-x-auto">
                           <table className="table table-xs">
                               <thead>
                                   <tr className="bg-green-50 font-bold text-xl">
                                       <th>উপজেলা</th>
                                       <th>নাম</th>
                                       <th>পদবি</th>
                                       <th>মোবাইল</th>
                                       <th>কার্যক্রম</th>
                                   </tr>
                               </thead>
                               <tbody>
       
                                   {armys.map((army) => (
                                       <tr key={army._id}
                                           className="hover:bg-gray-100"
                                       >
                                           <td>{army.upazilaName}</td>
                                           <td>{army.armyName}</td>
                                           <td>{army.designation}</td>
                                           <td>{army.mobile}</td>
                                           <td>
                                               <Link to={`/lawEnforcement/army/${army._id}`}>
                                                   <button className="btn btn-outline btn-accent m-1">
                                                       <HiPencilAlt /> সংশোধন
                                                   </button>
                                               </Link>
                                               <button onClick={() => handleDelete(army._id)}
                                                   className="btn btn-outline btn-error m-1">
                                                   <MdDelete />বাতিল
                                               </button>
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

export default LoadArmy;