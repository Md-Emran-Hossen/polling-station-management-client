import React from 'react';
import { useState, useEffect } from 'react';

const Bgb = () => {

    const [bgbs, setBgbs] = useState([]);
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
                    let url = "https://polling-station-management-server.vercel.app/bgbs";
                     if (selectedUpazila) {
                       url += `/bgb/${selectedUpazila}`;
                     }
                     fetch(url)
                       .then(res => res.json())
                       .then(data => setBgbs(data));
                }, [selectedUpazila]);
    
        
    // useEffect(() => {
    //     fetch("https://polling-station-management-server.vercel.app/bgbs")
    //     .then(res => res.json())
    //     .then(data => setBgbs(data));
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
           <div className="card lg:card-side bg-base-100 shadow-sm gap-10 m-5 p-5">
              {bgbs.map(bgb =>(
                <li key={bgb._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                    <h2 className="card-title">বর্ডার গার্ড বাংলাদেশ</h2>
                        <div>                              
                            নামঃ {bgb.upazilaName}                                 
                        </div>
                        <div>                              
                            নামঃ {bgb.bgbName}                                 
                        </div>
                        <div>                              
                            পদবিঃ {bgb.designation}                                 
                        </div>
                        <div>                              
                            মোবাইলঃ {bgb.mobile}                                 
                        </div>                          
                 </div>
                </div>
                </li>
              ))}
            </div>
        </div>
    );
};

export default Bgb;