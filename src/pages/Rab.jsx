import React from 'react';
import { useState, useEffect } from 'react';

const Rab = () => {
    const [rabs, setRabs] = useState([]);

    useEffect(()=> {
        fetch("https://polling-station-management-server.vercel.app/rabs")
        .then(res => res.json())
        .then(data => setRabs(data));
    }, []);

    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-sm gap-10 m-5 p-5">
              {rabs.map(rab =>(
                <li key={rab._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                    <h2 className="card-title">র‍্যাপিড একশন ব্যাটালিয়ন</h2>
                        <div>                              
                            নামঃ {rab.bgbName}                                 
                        </div>
                        <div>                              
                            পদবিঃ {rab.designation}                                 
                        </div>
                        <div>                              
                            মোবাইলঃ {rab.mobile}                                 
                        </div>                          
                 </div>
                </div>
                </li>
              ))}
            </div>
        </div>
    );
};

export default Rab;