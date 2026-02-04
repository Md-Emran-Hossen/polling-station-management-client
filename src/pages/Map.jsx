
import React, { useState, useEffect } from 'react';
import { toBN } from 'react-en-bn';

const Map = () => {

    const [maps, setMaps] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState("");
                
        // Load Upazila
            useEffect(() => { 
            fetch("https://polling-station-management-server.vercel.app/upazilas")
                    .then(res => res.json())
                    .then(data => setUpazilas(data));
                 }, []);
                
        // Load by selected Upazila items (all or filtered)
            useEffect(() => {
            let url = "https://polling-station-management-server.vercel.app/maps";
            if (selectedUpazila) {
                url += `/map/${selectedUpazila}`;
            }
            fetch(url)
            .then(res => res.json())
            .then(data => setMaps(data));
        }, [selectedUpazila]);

    return (
          <div>
             <div className="form-control sm:w-1/4 border border-indigo-400 m-10 p-2">
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
            <div className="overflow-x-auto">
                    <table className="table m-3 p-3">
                        <thead>
                            <tr className="bg-green-50 font-bold text-black text-xl">
                                <th>ক্রম</th>
                                <th>উপজেলা</th>
                                <th>ম্যাপে দেখতে লিংকে ক্লিক করুন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maps.map((map, index) => (
                                <tr key={map._id || index}
                                    className="hover:bg-gray-100"
                                >
                                    <td> {toBN(index + 1)} </td>
                                    <td> {map.upazilaName} </td>
                                    <td>
                                        <a href= {map.mapLink} 
                                            target="_blank" className="link link-primary"
                                         > 
                                            ম্যাপ দেখতে ক্লিক করুন!
                                        </a>  
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>

        // <div>
        //      <div className="card bg-base-300 text-primary-content mx-5 my-5">
        //         <div className="card-body">
        //              <div className="card-actions justify-center">
        //                 <a href='https://maps.app.goo.gl/X27WuLH1EBBYrQmE6' target="_blank" className="link link-primary"> ম্যাপ দেখতে ক্লিক করুন!</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Map;