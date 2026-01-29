import React from 'react';
import { useNavigate, useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditSummaryInfo = () => {
    const loadedData = useLoaderData();
    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const upazilaName = form.get("upazilaName");
        const numberOfUnion = form.get("numberOfUnion");
        const numberOfPourosova = form.get("numberOfPourosova");
        const permanentPollingStation = form.get("permanentPollingStation");
        const temporaryPollingStation = form.get("temporaryPollingStation");
        const totalPollingStation = form.get("totalPollingStation");
        const permanentBooth = form.get("permanentBooth");
        const temporaryBooth = form.get("temporaryBooth");
        const totalBooth = form.get("totalBooth");
        const maleVoter = form.get("maleVoter");
        const femaleVoter = form.get("femaleVoter");
        const thirdGender = form.get("thirdGender");
        const totalVoter = form.get("totalVoter");
        const comments = form.get("comments");

        const updateInfo = { 
                                upazilaName,
                                numberOfUnion,
                                numberOfPourosova,
                                permanentPollingStation,
                                temporaryPollingStation,
                                totalPollingStation,
                                permanentBooth,
                                temporaryBooth,
                                totalBooth,
                                maleVoter,
                                femaleVoter,
                                thirdGender,
                                totalVoter,
                                comments 
                             };

        fetch(`https://polling-station-management-server.vercel.app/summaryInformation/${loadedData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success("Data Updated Successfully", {
                        position: "top-right",
                    });
                    navigate("/dashboard/loadSummaryInformations");
                }
            });
    };

    return (
        <div>
              <div className="my-5 mx-2 mt-20">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        সারসংক্ষেপ সংশোধন করুন :
                    </h1>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
  py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            হোম
                        </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    {/* <Link to="/dashboard/loadPollingStations">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
  py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            ভোটকেন্দ্র
                        </button>
                    </Link> */}
                </div>
                <form onSubmit={handleEdit} className="w-full ">

                  <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="upazilaName"
                            >
                                উপজেলা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="upazilaName"
                                type="text"
                                name="upazilaName"
                                readOnly="true"
                                defaultValue={loadedData.upazilaName}
                            />
                        </div>
                    </div>

                   <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="numberOfUnion"
                            >
                                মোট ইউনিয়নের সংখ্যা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="numberOfUnion"
                                type="text"
                                name="numberOfUnion"
                                defaultValue={loadedData.numberOfUnion}
                            />
                        </div>
                    </div>
                     <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="numberOfPourosova"
                            >
                                মোট পৌরসভার সংখ্যা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="numberOfPourosova"
                                type="text"
                                name="numberOfPourosova"
                                defaultValue={loadedData.numberOfPourosova}
                            />
                        </div>
                    </div>
                     <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="permanentPollingStation"
                            >
                                স্থায়ী ভোট কেন্দ্র:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="permanentPollingStation"
                                type="text"
                                name="permanentPollingStation"
                                defaultValue={loadedData.permanentPollingStation}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="temporaryPollingStation"
                            >
                                অস্থায়ী ভোট কেন্দ্র:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="temporaryPollingStation"
                                type="text"
                                name="temporaryPollingStation"
                                defaultValue={loadedData.temporaryPollingStation}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="totalPollingStation"
                            >
                                মোট ভোট কেন্দ্র:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="totalPollingStation"
                                type="text"
                                name="totalPollingStation"
                                defaultValue={loadedData.totalPollingStation}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="permanentBooth"
                            >
                                স্থায়ী ভোটকক্ষ:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="permanentBooth"
                                type="text"
                                name="permanentBooth"
                                defaultValue={loadedData.permanentBooth}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="temporaryBooth"
                            >
                                অস্থায়ী ভোটকক্ষ:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="temporaryBooth"
                                type="text"
                                name="temporaryBooth"
                                defaultValue={loadedData.temporaryBooth}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="totalBooth"
                            >
                                মোট ভোটকক্ষের সংখ্যা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="totalBooth"
                                type="text"
                                name="totalBooth"
                                defaultValue={loadedData.totalBooth}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="maleVoter"
                            >
                                পুরুষ ভোটার:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="maleVoter"
                                type="text"
                                name="maleVoter"
                                defaultValue={loadedData.maleVoter}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="femaleVoter"
                            >
                                মহিলা ভোটার:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="femaleVoter"
                                type="text"
                                name="femaleVoter"
                                defaultValue={loadedData.femaleVoter}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="thirdGender"
                            >
                                হিজড়া:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="thirdGender"
                                type="text"
                                name="thirdGender"
                                defaultValue={loadedData.thirdGender}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="totalVoter"
                            >
                                মোট ভোটার:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="totalVoter"
                                type="text"
                                name="totalVoter"
                                defaultValue={loadedData.totalVoter}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="comments"
                            >
                                মন্তব্য:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="comments"
                                type="text"
                                name="comments"
                                defaultValue={loadedData.comments}
                            />
                        </div>
                    </div>
                   
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="shadow bg-purple-500 hover:bg-purple-400 
                                            focus:shadow-outline focus:outline-none
                                          text-white font-bold py-2 px-4 rounded-none"
                                type="submit"
                            >
                                সংশোধন করুন
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSummaryInfo;