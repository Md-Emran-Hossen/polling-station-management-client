import React from 'react';
import { useState, useEffect } from 'react';

const Bgb = () => {

    const [bgbs, setBgbs] = useState([]);
        
    useEffect(() => {
        fetch("https://polling-station-management-server.vercel.app/bgbs")
        .then(res => res.json())
        .then(data => setBgbs(data));
    }, []);

    return (
         <div>
           <div className="card lg:card-side bg-base-100 shadow-sm gap-10 m-5 p-5">
              {bgbs.map(bgb =>(
                <li key={bgb._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                    <h2 className="card-title">বর্ডার গার্ড বাংলাদেশ</h2>
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