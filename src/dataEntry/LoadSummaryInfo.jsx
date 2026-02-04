import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

const LoadSummaryInfo = () => {
    const loadedSummaryInformations = useLoaderData();
    const [summaryInformations, setSummaryInformations] = useState(loadedSummaryInformations);

    const handleDelete = (_id) => {
       // console.log(_id);
        fetch(`https://polling-station-management-server.vercel.app/summaryInfo/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Summary Information deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = summaryInformations.filter((summaryInfo) => summaryInfo._id !== _id);
                    setSummaryInformations(remainingData);
                }
            });
    };
    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    {/* <h1 className="text-3xl font-bold text-center mb-10">
                        মোট ভোটকেন্দ্র: {summaryInformations.length}
                    </h1>
                    &nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Link to="/dataEntry">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
        py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            ড্যাশবোর্ড
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-green-50 font-bold text-black md:text-xl">
                                <th>উপজেলা</th>
                                <th>ইউনিয়ন</th>
                                <th>পৌরসভা</th>
                                <th>স্থায়ী ভোট কেন্দ্র</th> 
                                <th>অস্থায়ী ভোট কেন্দ্র</th>   
                                <th>মোট ভোট কেন্দ্র</th>
                                <th>স্থায়ী ভোটকক্ষ</th>
                                <th>অস্থায়ী ভোটকক্ষ</th>
                                <th>মোট ভোটকক্ষ</th>
                                <th>পুরুষ ভোটার</th>
                                <th>মহিলা ভোটার</th>
                                <th>হিজড়া</th>
                                <th>মোট ভোটার</th>
                                <th>মন্তব্য</th>
                                <th>কার্যক্রম</th>
                            </tr>
                        </thead>
                        <tbody>

                            {summaryInformations.map((summaryInfo) => (
                                <tr key={summaryInfo._id}
                                    className="hover:bg-gray-100 text-center"
                                >
                                    <td>{summaryInfo.upazilaName}</td>
                                    <td>{summaryInfo.numberOfUnion}</td>
                                    <td>{summaryInfo.numberOfPourosova}</td>
                                    <td>{summaryInfo.permanentPollingStation}</td>
                                    <td>{summaryInfo.temporaryPollingStation}</td>
                                    <td>{summaryInfo.totalPollingStation}</td>
                                    <td>{summaryInfo.permanentBooth}</td>
                                    <td>{summaryInfo.temporaryBooth}</td>
                                    <td>{summaryInfo.totalBooth}</td>
                                    <td>{summaryInfo.maleVoter}</td>
                                     <td>{summaryInfo.femaleVoter}</td>
                                    <td>{summaryInfo.thirdGender}</td>
                                    <td>{summaryInfo.totalVoter}</td>
                                    <td>{summaryInfo.comments}</td>
                                    {/* <td>
                                        <Link to={`/dataEntry/summaryInformation/${summaryInfo._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> সংশোধন
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(summaryInfo._id)}
                                            className="btn btn-outline btn-error m-1">
                                            <MdDelete />বাতিল
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LoadSummaryInfo;