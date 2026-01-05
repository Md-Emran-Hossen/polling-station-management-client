import React from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const EditPollingStationInfo = () => {
    const loadedData = useLoaderData();
    // console.log("LOADED DATA", loadedData);
    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const districtName = form.get("districtName");
        const upazilaName = form.get("upazilaName");
        const unionName = form.get("unionName");
        const pollingStationNo = form.get("pollingStationNo");
        const pollingStationName = form.get("pollingStationName");
        const numberOfBooth = form.get("numberOfBooth");
        const wordNoAndVillage = form.get("wordNoAndVillage");
        const pollingStationType = form.get("pollingStationType");
        const permanentBooth = form.get("permanentBooth");
        const temporaryBooth = form.get("temporaryBooth");
        const male = form.get("male");
        const female = form.get("female");
        const thirdGender = form.get("thirdGender");
        const totalVoter = form.get("totalVoter");
        const parliamentarySeat = form.get("parliamentarySeat");
        const mapInfo = form.get("mapInfo");

        const updateInfo = { 
                                districtName,
                                upazilaName,
                                unionName,
                                pollingStationNo, 
                                pollingStationName, 
                                numberOfBooth, 
                                wordNoAndVillage,
                                pollingStationType,
                                permanentBooth,
                                temporaryBooth,
                                male,
                                female,
                                thirdGender,
                                totalVoter,
                                parliamentarySeat,
                                mapInfo
                             };

        fetch(`https://polling-station-management-server.vercel.app/pollingStation/${loadedData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Updated Data Found", data);
                if (data.modifiedCount) {
                    toast.success("Data Updated Successfully", {
                        position: "top-right",
                    });
                    navigate("/dashboard/loadPollingStations");
                }
            });
    };

    return (
        <div>
            <div className="my-5 mx-2 mt-20">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        ভোটকেন্দ্রের তথ্য সংশোধন করুন :
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
                    <Link to="/dashboard/loadPollingStations">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
  py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            ভোটকেন্দ্র
                        </button>
                    </Link>
                </div>
                <form onSubmit={handleEdit} className="w-full ">

                   <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="districtName"
                            >
                                জেলা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="districtName"
                                type="text"
                                name="districtName"
                                readOnly="true"
                                defaultValue={loadedData.districtName}
                            />
                        </div>
                    </div>
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
                                htmlFor="unionName"
                            >
                                ইউনিয়ন:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="unionName"
                                type="text"
                                name="unionName"
                                readOnly="true"
                                defaultValue={loadedData.unionName}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="pollingStationNo"
                            >
                                ভোটকেন্দ্র নং:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="pollingStationNo"
                                type="text"
                                name="pollingStationNo"
                                defaultValue={loadedData.pollingStationNo}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="pollingStationName"
                            >
                                ভোটকেন্দ্রের নাম ও অবস্থান:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <textarea
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="pollingStationName"
                                type="text"
                                name="pollingStationName"
                                rows={4}
                                defaultValue={loadedData.pollingStationName}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="numberOfBooth"
                            >
                                ভোটকক্ষের সংখ্যা:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="numberOfBooth"
                                type="text"
                                name="numberOfBooth"
                                defaultValue={loadedData.numberOfBooth}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="wordNoAndVillage"
                            >
                                গ্রামের নাম এবং ওয়ার্ড নং:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <textarea
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="wordNoAndVillage"
                                type="text"
                                name="wordNoAndVillage"
                                rows={5}
                                defaultValue={loadedData.wordNoAndVillage}
                            />
                        </div>
                    </div>

                       <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="pollingStationType"
                            >
                                ভোটকেন্দ্রের ধরন:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="pollingStationType"
                                type="text"
                                name="pollingStationType"
                                defaultValue={loadedData.pollingStationType}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="permanentBooth"
                            >
                                স্থায়ী বুথ:
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
                                অস্থায়ী বুথ:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
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
                                htmlFor="male"
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
                                id="male"
                                type="text"
                                name="male"
                                defaultValue={loadedData.male}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="female"
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
                                id="female"
                                type="text"
                                name="female"
                                defaultValue={loadedData.female}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="thirdGender"
                            >
                                তৃতীয় লিঙ্গ:
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
                                htmlFor="parliamentarySeat"
                            >
                                নির্বাচনী এলাকার নম্বর ও নাম:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="parliamentarySeat"
                                type="text"
                                name="parliamentarySeat"
                                defaultValue={loadedData.parliamentarySeat}
                            />
                        </div>
                    </div>

                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="mapInfo"
                            >
                                গুগল ম্যাপে অবস্থান:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="mapInfo"
                                type="text"
                                name="mapInfo"
                                defaultValue={loadedData.mapInfo}
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

export default EditPollingStationInfo;