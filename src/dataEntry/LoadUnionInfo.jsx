import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { HiPencilAlt } from 'react-icons/hi';
import { toBN } from 'react-en-bn';


const LoadUnionInfo = () => {

     const loadedUnions = useLoaderData();
   // console.log("Upazila Info", loadedUnions);
    const [unions, setUnions] = useState(loadedUnions);

    const handleDelete = (_id) => {
         const confirmDelete = window.confirm("আপনি কি ডেটাটি মুছতে চান?");
         if (confirmDelete) {
            fetch(`https://polling-station-management-server.vercel.app/union/${_id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Union deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = unions.filter((union) => union._id !== _id);
                    setUnions(remainingData);
                }
            });
         }
    };

    return (
         <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-xl font-bold text-center pt-2 mb-10">
                        মোট ইউনিয়ন: {toBN(unions.length)}
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
                                <th>ক্রম</th>
                                <th>উপজেলা</th>
                                <th>ইউনিয়ন/ পৌরসভা</th>
                                <th>কার্যক্রম</th>
                            </tr>
                        </thead>
                        <tbody>

                            {unions.map((union, index) => (
                                <tr key={union._id || index}
                                    className="hover:bg-gray-100"
                                >
                                    <td>{toBN(index + 1)}</td>
                                    <td>{union.upazilaName}</td>
                                    <td>{union.unionName}</td>
                                    <td>
                                        <Link to={`/dataEntry/union/${union._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> সংশোধন
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(union._id)}
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

export default LoadUnionInfo;