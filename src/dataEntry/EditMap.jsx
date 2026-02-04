import React from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';

const EditMap = () => {
    const loadedData = useLoaderData();
    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const mapLink = form.get("mapLink");

        const updateInfo = { 
            mapLink,
        };

        fetch(`https://polling-station-management-server.vercel.app/map/${loadedData._id}`, {
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
                    navigate("/dataEntry/loadMaps");
                }
            });
    };

    return (
        <div>
            <div className="my-5 mx-2 mt-20">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-xl font-bold text-center mb-10">
                        ম্যাপের লিংক সংশোধন করুন :
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
                </div>
                <form onSubmit={handleEdit} className="w-full ">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="unionName"
                            >
                                উপজেলা:
                            </label>
                        </div>
                        <div className="md:w-1/3 border border-indigo-400 p-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <select
                                    disabled={true}
                                >
                                <option key={loadedData._id} value={loadedData._id}>
                                    {loadedData.upazilaName}
                                </option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="mapLink"
                            >
                                নাম:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                                           leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="mapLink"
                                    type="text"
                                    name="mapLink"
                                    defaultValue={loadedData.mapLink}
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
                <br /> <br /> <br />
            </div>
        </div>
    );
};

export default EditMap;