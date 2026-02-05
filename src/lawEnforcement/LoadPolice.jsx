import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { toBN } from 'react-en-bn';

const LoadPolice = () => {
     const loadedPoliceInfo = useLoaderData();
    // console.log("BGB Info", loadedBgbInfo);
    const [polices, setPolices] = useState(loadedPoliceInfo);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://polling-station-management-server.vercel.app/police/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Police Info deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = polices.filter((police) => police._id !== _id);
                    setPolices(remainingData);
                }
            });
    };
    return (
         <div className="w-3/4 mx-auto bg-base-200 p-10">
                          <div className="mt-14 mx-2 my-5 justify-center">
                              <div className="flex justify-center justify-items-center">
                                  <h1 className="text-xl font-bold text-center pt-2 mb-10">
                                      মোট পুলিশ: {toBN(polices.length)}
                                  </h1>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                  <Link to="/">
                                      <button
                                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                      py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                                      >
                                          Home
                                      </button>
                                  </Link>
                              </div>
              
                              <div className="overflow-x-auto">
                                  <table className="table table-xs">
                                      <thead>
                                          <tr className="bg-green-50 font-bold text-xl">
                                              <th>ক্রম</th>
                                              <th>উপজেলা</th>
                                              <th>নাম</th>
                                              <th>পদবি</th>
                                              <th>মোবাইল</th>
                                              <th>কার্যক্রম</th>
                                          </tr>
                                      </thead>
                                      <tbody>
              
                                          {polices.map((police, index) => (
                                              <tr key={police._id || index}
                                                  className="hover:bg-gray-100"
                                              >
                                                  <td>{toBN(index + 1)}</td>
                                                  <td>{police.upazilaName}</td>
                                                  <td>{police.policeName}</td>
                                                  <td>{police.designation}</td>
                                                  <td>{police.mobile}</td>
                                                  <td>
                                                      <Link to={`/lawEnforcement/police/${police._id}`}>
                                                          <button className="btn btn-outline btn-accent m-1">
                                                              <HiPencilAlt /> সংশোধন
                                                          </button>
                                                      </Link>
                                                      <button onClick={() => handleDelete(police._id)}
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

export default LoadPolice;