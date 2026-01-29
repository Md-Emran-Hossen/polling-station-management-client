import React, { useState, useEffect } from 'react';

const ExecutiveMagistrate = () => {

    const [magistrates, setMagistrates] = useState([]);

        useEffect(() => {
          fetch("https://polling-station-management-server.vercel.app/magistrates")
            .then(res => res.json())
            .then(data => setMagistrates(data));
        }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-5 p-5">
           {magistrates.map(magistrate => (
                <li key={magistrate._id}>
                    <div className="card transition duration-300 ease-in-out hover:scale-110">
                        <div className="card-body bg-blue-200">
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
                            <div className="justify-end card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </li>
           ))}
        </div>
    );
};

export default ExecutiveMagistrate;