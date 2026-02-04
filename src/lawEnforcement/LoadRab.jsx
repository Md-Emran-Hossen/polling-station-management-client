import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

const LoadRab = () => {

    const loadedRabInfo = useLoaderData();
    const [rabs, setRabs] = useState(loadedRabInfo);

    const handleDelete = (_id) => {
        fetch(`https://polling-station-management-server.vercel.app/rab/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("RAB Info deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = rabs.filter((rab) => rab._id !== _id);
                    setRabs(remainingData);
                }
            });
    };

    return (
         <div className="w-3/4 mx-auto bg-base-200 p-10">
                          <div className="mt-14 mx-2 my-5 justify-center">
                              <div className="flex justify-center justify-items-center">
                                  <h1 className="text-3xl font-bold text-center mb-10">
                                      মোট র‍্যাব: {rabs.length}
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
                                              <th>উপজেলা</th>
                                              <th>নাম</th>
                                              <th>পদবি</th>
                                              <th>মোবাইল</th>
                                              <th>কার্যক্রম</th>
                                          </tr>
                                      </thead>
                                      <tbody>
              
                                          {rabs.map((rab) => (
                                              <tr key={rab._id}
                                                  className="hover:bg-gray-100"
                                              >
                                                  <td>{rab.upazilaName}</td>
                                                  <td>{rab.rabName}</td>
                                                  <td>{rab.designation}</td>
                                                  <td>{rab.mobile}</td>
                                                  <td>
                                                      <Link to={`/lawEnforcement/rab/${rab._id}`}>
                                                          <button className="btn btn-outline btn-accent m-1">
                                                              <HiPencilAlt /> সংশোধন
                                                          </button>
                                                      </Link>
                                                      <button onClick={() => handleDelete(rab._id)}
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

export default LoadRab;