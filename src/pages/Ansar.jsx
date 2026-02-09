import React from 'react';
import { useState, useEffect } from 'react';

const Ansar = () => {
    const [ansars, setAnsars] = useState([]);
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
          let url = "https://polling-station-management-server.vercel.app/ansars";
            if (selectedUpazila) {
                url += `/ansar/${selectedUpazila}`;
              }
            fetch(url)
            .then(res => res.json())
            .then(data => setAnsars(data));
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
            <h2 className="card-title ml-10 pl-2 underline">দায়িত্বপ্রাপ্ত আনসার</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5 p-5">
              {ansars.map(ansar =>(
                <li key={ansar._id}>
                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                        
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">উপজেলাঃ</div>  
                            <div className="text-left"> {ansar.upazilaName} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">নামঃ</div>  
                            <div className="text-left"> {ansar.ansarName} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">পদবিঃ</div>  
                            <div className="text-left"> {ansar.designation} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">দায়িত্বপ্রাপ্ত এলাকা/ভোটকেন্দ্রসমূহঃ</div>  
                            <div className="text-left"> {ansar.attachedArea} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-bottle-green text-left font-bold">মোবাইলঃ</div>  
                            <div className="text-left"> {ansar.mobile} </div>                                                            
                        </div>                           
                 </div>
                </div>
                </li>
              ))}
            </div>
        </div>
    );
};

export default Ansar;