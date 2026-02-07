import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { useEffect } from 'react';
import { toBN } from 'react-en-bn';

const LoadFileData = () => {

    const loadedVoteCenterInformations = useLoaderData();
   // console.log("Upazila Info", loadedUnions);
    const [file, setFile] = useState(loadedVoteCenterInformations);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState("");
    
    const [unions, setUnions] = useState([]);
    const [selectedUnion, setSelectedUnion] = useState("");

      // Load Upazila
        useEffect(() => { 
          fetch("https://polling-station-management-server.vercel.app/upazilas")
            .then(res => res.json())
            .then(data => {
                   setUpazilas(data);
                 if (data.length > 0) {
                  setSelectedUpazila(data);
                }
            });
        }, []);
    
      // Load Union
      useEffect(() => {
        fetch(`https://polling-station-management-server.vercel.app/loadUnion/${selectedUpazila}`)
          .then(res => res.json())
          .then(data => setUnions(data));
      }, [selectedUpazila]);

      // Load by selected Upazila items (all or filtered)
            useEffect(() => {
              let url = "https://polling-station-management-server.vercel.app/file";
              if (selectedUpazila) {
                url += `/data/upazila/${selectedUpazila}`;
              }
              fetch(url)
                .then(res => res.json())
                .then(data => setFile(data));
            }, [selectedUpazila]);
      
        // Load by selected Union items (filtered)
        useEffect(() => {
          let url = "https://polling-station-management-server.vercel.app/file";
          if (selectedUnion) {
            url += `/data/union/${selectedUnion}`;
          }
          fetch(url)
            .then(res => res.json())
            .then(data => setFile(data));
        }, [selectedUnion]);
    
    const handleDelete = (_id) => {
       // console.log(_id);
        fetch(`https://polling-station-management-server.vercel.app/file/data/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Polling Station deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = setFile.filter((fileData) => fileData._id !== _id);
                    setFile(remainingData);
                }
            });
    };

    return (
        <div className="w-full mx-auto bg-base-200 p-3">
            <div className="mt-5 mx-2 my-5 justify-center">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-xl font-bold text-center pt-2 mb-10">
                        মোট ভোটকেন্দ্র: {toBN(file.length)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-blue-100 m-2 p-2">
              <div className="form-control max-w-xs border p-2 border-indigo-400">
                <div className='flex justify-center items-center max-w-xs'>
                    <select
                      value={selectedUpazila}
                      // disabled={true}
                      onChange={(e) => setSelectedUpazila(e.target.value)}
                    >
                      <option value=""> উপজেলা নির্বাচন করুন </option>
                      {upazilas.map(upa => (
                        <option key={upa._id} value={upa._id}>
                          {upa.upazilaName}
                        </option>
                       ))}
                    </select>
                 </div>
            </div>  
                                   
            <div className="form-control max-w-xs border p-2 border-indigo-400">
              <div className='flex justify-center items-center max-w-xs'>
                  <select
                    value={selectedUnion}
                    // onChange={(e) => setSelectedUnion(e.target.value)}
                    onChange={(e) => setSelectedUnion(e.target.value)}
                  >
                    <option value=""> ইউনিয়ন নির্বাচন করুন </option>
                      {unions.map(union => (
                    <option key={union._id} value={union._id}>
                      {union.unionName}
                    </option>
                    ))}
                  </select>
                </div>
            </div>
          </div>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-green-100 font-bold text-xl text-center">
                                <th>ক্রম</th>
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

                            {file.map((fileData, index) => (
                                <tr key={fileData._id || index}
                                    className="hover:bg-gray-100 text-center"
                                >
                                    <td>{toBN(index + 1)}</td>
                                    <td>{fileData.districtName}</td>
                                    <td>{fileData.upazilaName}</td>
                                    <td>{fileData.unionName}</td>
                                    <td>{fileData.pollingStationNo}</td>
                                    <td>{fileData.pollingStationName}</td>
                                    <td>{fileData.numberOfBooth}</td>
                                    <td>{fileData.wordNoAndVillage}</td>
                                    <td>{fileData.pollingStationType}</td>
                                    <td>{fileData.permanentBooth}</td>
                                    <td>{fileData.temporaryBooth}</td>
                                    <td>{fileData.male}</td>
                                    <td>{fileData.female}</td>
                                    <td>{fileData.thirdGender}</td>
                                    <td>{fileData.totalVoter}</td>
                                    <td>{fileData.parliamentarySeat}</td>
                                    <td>
                                        <Link to={`/dataEntry/pollingStation/${fileData._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> সংশোধন
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(fileData._id)}
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

export default LoadFileData;