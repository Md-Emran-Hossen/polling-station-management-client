import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {

    const [summaryInformations, setSummaryInformations] = useState([]);

    useEffect(() => {
        fetch("https://polling-station-management-server.vercel.app/summaryInformations")
            .then(res => res.json())
            .then(data => setSummaryInformations(data));
    }, []);

    return (
        <div className="w-full mx-auto bg-base-200 p-10">
            <div className="mt-14 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
        py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            হোম
                        </button>
                    </Link>
                </div>

                <div>
                      <h4 className="text-xl md:text-left font-bold mt-5 p-2 underline">সারসংক্ষেপ (২৯৬-কক্সবাজার-৩ নির্বাচনী এলাকার তথ্য)</h4>
                </div>   
                <div className="overflow-x-auto">
                    <table className="table table-xs border border-gray-500 border-solid">
                        <thead>
                            <tr className="bg-green-50 font-bold text-xl">
                                <th className="border border-gray-500 border-solid text-black">উপজেলা</th>
                                <th className="border border-gray-500 border-solid text-black">ইউনিয়ন</th>
                                <th className="border border-gray-500 border-solid text-black">পৌরসভা</th>
                                <th className="border border-gray-500 border-solid text-black">স্থায়ী ভোট কেন্দ্র</th> 
                                <th className="border border-gray-500 border-solid text-black">অস্থায়ী ভোট কেন্দ্র</th>   
                                <th className="border border-gray-500 border-solid text-black">মোট ভোট কেন্দ্র</th>
                                <th className="border border-gray-500 border-solid text-black">স্থায়ী ভোটকক্ষ</th>
                                <th className="border border-gray-500 border-solid text-black">অস্থায়ী ভোটকক্ষ</th>
                                <th className="border border-gray-500 border-solid text-black">মোট ভোটকক্ষ</th>
                                <th className="border border-gray-500 border-solid text-black">পুরুষ ভোটার</th>
                                <th className="border border-gray-500 border-solid text-black">মহিলা ভোটার</th>
                                <th className="border border-gray-500 border-solid text-black">হিজড়া</th>
                                <th className="border border-gray-500 border-solid text-black">মোট ভোটার</th>
                                <th className="border border-gray-500 border-solid text-black">মন্তব্য</th>
                            </tr>
                        </thead>
                        <tbody>

                            {summaryInformations.map((summaryInfo) => (
                                <tr key={summaryInfo._id}   
                                >
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.upazilaName}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.numberOfUnion}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.numberOfPourosova}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.permanentPollingStation}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.temporaryPollingStation}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.totalPollingStation}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.permanentBooth}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.temporaryBooth}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.totalBooth}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.maleVoter}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.femaleVoter}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.thirdGender}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.totalVoter}</td>
                                    <td className="border border-gray-500 border-solid text-xl text-black text-center">{summaryInfo.comments}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Summary;