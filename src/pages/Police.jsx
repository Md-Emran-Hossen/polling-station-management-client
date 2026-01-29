import React, { useState, useEffect } from 'react';

const Police = () => {
    const [polices, setPolices] = useState([]);

    useEffect(() => {
        fetch("https://polling-station-management-server.vercel.app/polices")
        .then(res => res.json())
        .then(data => setPolices(data));
    }, []);

    return (
       <div>
           <div className="card lg:card-side bg-base-100 shadow-sm gap-10 m-5 p-5">
              {polices.map(police =>(
                <li key={police._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                    <h2 className="card-title">বাংলাদেশ পুলিশ</h2>
                        <div>                              
                            নামঃ {police.policeName}                                 
                        </div>
                        <div>                              
                            পদবিঃ {police.designation}                                 
                        </div>
                        <div>                              
                            মোবাইলঃ {police.mobile}                                 
                        </div>                          
                 </div>
                </div>
                </li>
              ))}
            </div>
        </div>
    );
};

export default Police;