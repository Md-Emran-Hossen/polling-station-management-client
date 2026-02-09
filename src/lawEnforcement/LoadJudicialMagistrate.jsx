import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { toBN } from 'react-en-bn';

const LoadJudicialMagistrate = () => {
    const loadedMagistrateInfo = useLoaderData();
    const [magistrates, setMagistrates] = useState(loadedMagistrateInfo);

    const handleDelete = (_id) => {
        const confirmDelete = window.confirm("আপনি কি ডেটাটি মুছতে চান?");
        if (confirmDelete) {
            fetch(`https://polling-station-management-server.vercel.app/judicial/magistrate/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                if (data.deletedCount) {
                    toast.success("Magistrate Info deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = magistrates.filter((magistrate) => magistrate._id !== _id);
                    setMagistrates(remainingData);
                }
            });
        }
    };
    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="font-bold text-center mb-10 underline">
                        জুডিশিয়াল ম্যাজিস্ট্রেটের সংখ্যা: {toBN(magistrates.length)}
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
                        <tr className="bg-green-50 font-bold text-black">
                            <th>ক্রম</th>
                            <th>উপজেলা</th>
                            <th>নাম</th>
                            <th>পদবি</th>
                            <th>মোবাইল</th>
                            <th>দায়িত্বপ্রাপ্ত এলাকা</th>
                            <th>কার্যক্রম</th>
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
                            <td>{magistrate.attachedArea}</td>
                            <td>
                                <Link to={`/lawEnforcement/judicialMagistrate/${magistrate._id}`}>
                                    <button className="btn btn-outline btn-accent m-1">
                                        <HiPencilAlt /> সংশোধন
                                    </button>
                                </Link>
                                    <button onClick={() => handleDelete(magistrate._id)}
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

export default LoadJudicialMagistrate;