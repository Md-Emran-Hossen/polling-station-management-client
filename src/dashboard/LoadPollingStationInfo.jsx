import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

const LoadPollingStationInfo = () => {
     const loadedPollingStations = useLoaderData();
   // console.log("Upazila Info", loadedUnions);
    const [pollingStations, setPollingStations] = useState(loadedPollingStations);

    const handleDelete = (_id) => {
       // console.log(_id);
        fetch(`https://polling-station-management-server.vercel.app/pollingStation/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Polling Station deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = pollingStations.filter((pollingStation) => pollingStation._id !== _id);
                    setPollingStations(remainingData);
                }
            });
    };
    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        মোট ভোটকেন্দ্র: {pollingStations.length}
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
                                <th>জেলা</th>
                                <th>উপজেলা</th>
                                <th>ইউনিয়ন</th>
                                <th>ভোটকেন্দ্র নং</th>
                                <th>ভোটকেন্দ্রের নাম ও অবস্থান</th> 
                                <th>ভোটকক্ষের সংখ্যা</th>   
                                <th>গ্রামের নাম এবং ওয়ার্ড নং</th>
                                <th>ভোটকেন্দ্রের ধরন</th>
                                <th>স্থায়ী বুথ</th>
                                <th>অস্থায়ী বুথ</th>
                                <th>পুরুষ ভোটার</th>
                                <th>মহিলা ভোটার</th>
                                <th>তৃতীয় লিঙ্গ</th>
                                <th>মোট ভোটার</th>
                                <th>সংসদীয় আসন</th>
                                <th>কার্যক্রম</th>
                            </tr>
                        </thead>
                        <tbody>

                            {pollingStations.map((pollingStation) => (
                                <tr key={pollingStation._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td>{pollingStation.districtName}</td>
                                    <td>{pollingStation.upazilaName}</td>
                                    <td>{pollingStation.unionName}</td>
                                    <td>{pollingStation.pollingStationNo}</td>
                                    <td>{pollingStation.pollingStationName}</td>
                                    <td>{pollingStation.numberOfBooth}</td>
                                    <td>{pollingStation.wordNoAndVillage}</td>
                                    <td>{pollingStation.pollingStationType}</td>
                                    <td>{pollingStation.permanentBooth}</td>
                                    <td>{pollingStation.temporaryBooth}</td>
                                    <td>{pollingStation.male}</td>
                                    <td>{pollingStation.female}</td>
                                    <td>{pollingStation.thirdGender}</td>
                                    <td>{pollingStation.totalVoter}</td>
                                    <td>{pollingStation.parliamentarySeat}</td>
                                    <td>
                                        <Link to={`/dashboard/pollingStation/${pollingStation._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> সংশোধন
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(pollingStation._id)}
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

export default LoadPollingStationInfo;