import React, { useState, useEffect } from 'react';

const ExecutiveMagistrate = () => {

    const [magistrates, setMagistrates] = useState([]);
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
                            let url = "https://polling-station-management-server.vercel.app/magistrates";
                             if (selectedUpazila) {
                               url += `/magistrate/${selectedUpazila}`;
                             }
                             fetch(url)
                               .then(res => res.json())
                               .then(data => setMagistrates(data));
                        }, [selectedUpazila]);
    

        // useEffect(() => {
        //   fetch("https://polling-station-management-server.vercel.app/magistrates")
        //     .then(res => res.json())
        //     .then(data => setMagistrates(data));
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
            <h2 className="card-title ml-10 pl-2 underline">দায়িত্বপ্রাপ্ত ম্যাজিস্ট্রেটগণ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-5 p-5">
           {magistrates.map(magistrate => (
                <li key={magistrate._id}>
                    <div className="card transition duration-300 ease-in-out hover:scale-110">

                        <div className="card-body bg-blue-200">
                                <div className="grid grid-cols-2 gap-1">  
                                    <div className="text-bottle-green text-left font-bold">নামঃ</div>  
                                    <div className="text-left"> {magistrate.magistrateName} </div>                                                            
                                </div>
                                <div className="grid grid-cols-2 gap-1">  
                                    <div className="text-bottle-green text-left font-bold">পদবিঃ</div>  
                                    <div className="text-left">   {magistrate.designation} </div>                                                            
                                </div>
                                <div className="grid grid-cols-2 gap-1">  
                                    <div className="text-bottle-green text-left font-bold"> মোবাইলঃ </div>  
                                    <div className="text-left">  {magistrate.mobile} </div>                                                            
                                </div>   
                                 <div className="grid grid-cols-2 gap-1">  
                                    <div className="text-bottle-green text-left font-bold"> দায়িত্বপ্রাপ্ত কেন্দ্রঃ </div>  
                                    <div className="text-left">  {magistrate.pollingStations} </div>                                                            
                                </div>  
                                 <div className="grid grid-cols-2 gap-1">  
                                    <div className="text-bottle-green text-left font-bold"> লাইভ লোকেশনঃ </div>  
                                    <div className="text-left">   
                                        <a href= {magistrate.liveLink} 
                                            target="_blank" 
                                            className="link link-primary"> 
                                            ক্লিক করুন! 
                                        </a> 
                                    </div>                                                            
                                </div>                      
                        </div>

                        {/* <div className="card-body bg-blue-200">
                            <h2 className="card-title">এক্সিকিউটিভ ম্যাজিস্ট্রেট</h2>
                             <div>                              
                                নামঃ {magistrate.magistrateName}                                 
                            </div>
                             <div>                              
                                পদবিঃ {magistrate.designation}                                 
                            </div>
                             <div>                              
                                মোবাইলঃ {magistrate.mobile}                                 
                            </div>
                             <div>                              
                                দায়িত্বপ্রাপ্ত কেন্দ্রঃ {magistrate.pollingStations}                                 
                            </div>
                            <div>                              
                                লাইভ লোকেশনঃ
                                 <a href= {magistrate.liveLink} target="_blank" className="link link-primary"> ক্লিক করুন! </a>                              
                            </div>
                            <div className="justify-end card-actions">
                            </div>
                        </div> */}
                    </div>
                </li>
             ))}
          </div>
        </div>
    );
};

export default ExecutiveMagistrate;