import React, { useEffect, useState } from 'react';

const Army = () => {

     const [armys, setArmys] = useState([]);
    
            useEffect(() => {
              fetch("https://polling-station-management-server.vercel.app/armys")
                .then(res => res.json())
                .then(data => setArmys(data));
            }, []);
    
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-sm gap-10 m-5 p-5">
              {armys.map(army =>(
                <li key={army._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                    <h2 className="card-title">বাংলাদেশ সেনাবাহিনী</h2>
                        <div>                              
                            নামঃ {army.armyName}                                 
                        </div>
                        <div>                              
                            পদবিঃ {army.designation}                                 
                        </div>
                        <div>                              
                            মোবাইলঃ {army.mobile}                                 
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