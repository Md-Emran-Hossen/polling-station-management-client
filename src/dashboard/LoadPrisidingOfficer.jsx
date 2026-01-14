import React from 'react';
import { useLoaderData, Link } from 'react-router-dom'; 
import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { HiPencilAlt } from 'react-icons/hi';

const LoadPrisidingOfficer = () => {
     const loadedPso = useLoaderData();
    const [prisidingOfficers, setPrisidingOfficers] = useState(loadedPso);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/prisidingOfficer/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("Prisiding Officer deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = prisidingOfficers.filter((pso) => pso._id !== _id);
                    setPrisidingOfficers(remainingData);
                }
            });
    };

    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        মোট ইউনিয়ন: {prisidingOfficers.length}
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
                            <tr className="bg-green-50 font-bold text-xl">
                                {/* <th>জেলা</th> */}
                                <th>ভোটকেন্দ্র</th>
                                <th>ভোটগ্রহণকারী কর্মকর্তা</th>
                                 <th>মোবাইল</th>
                                <th>কার্যক্রম</th>
                            </tr>
                        </thead>
                        <tbody>

                            {prisidingOfficers.map((pso) => (
                                <tr key={pso._id}
                                    className="hover:bg-gray-100"
                                >
                                    {/* <td>{union.districtName}</td> */}
                                    <td>{pso.pollingStationName}</td>
                                    <td>{pso.prisidingOffcer}</td>
                                     <td>{pso.mobile}</td>
                                    <td>
                                        <Link to={`/dashboard/prisidingOffcer/${pso._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> সংশোধন
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(pso._id)}
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

export default LoadPrisidingOfficer;