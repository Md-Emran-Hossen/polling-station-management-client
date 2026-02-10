import React, { useEffect, useState } from 'react';
import '../App.css';

const Army = () => {

    const [armys, setArmys] = useState([]);
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
                let url = "https://polling-station-management-server.vercel.app/armys";
                 if (selectedUpazila) {
                   url += `/army/${selectedUpazila}`;
                 }
                 fetch(url)
                   .then(res => res.json())
                   .then(data => setArmys(data));
            }, [selectedUpazila]);


    
            // useEffect(() => {
            //   fetch("https://polling-station-management-server.vercel.app/armys")
            //     .then(res => res.json())
            //     .then(data => setArmys(data));
            // }, []);
    
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
              <h2 className="card-title ml-10 pl-2 underline">দায়িত্বপ্রাপ্ত সেনাবাহিনীঃ</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-5 p-5">
            {armys.map(army =>(
              <li key={army._id}>
                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                        <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">উপজেলাঃ</div>  
                            <div className="text-left"> {army.upazilaName} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">নাম এবং পদবিঃ </div>  
                            <div className="text-left"> {army.armyName} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">ক্যাম্পঃ</div>  
                            <div className="text-left"> {army.designation} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">দায়িত্বপ্রাপ্ত এলাকা/ভোটকেন্দ্রসমূহঃ</div>  
                            <div className="text-left"> {army.attachedArea} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">মোবাইলঃ</div>  
                            <div className="text-left"> {army.mobile} </div>                                                            
                        </div>   
                 </div>
                </div>
                </li>
              ))}
            </div>
        </div>
    );
};

export default Army;