import React from 'react';
import { useState, useEffect } from 'react';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PollingStations = () => {

     const [pollingStations, setPollingStations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pollingStations')
            .then(res => res.json())
            .then(data => setPollingStations(data));
    });
    console.log("Polling Stations Data Found", pollingStations);

    return (
        <div>
             <div className="text-4xl font-bold text-center p-8">
                <h2>ভোটকেন্দ্রে সমূহ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 my-5">

                {pollingStations.map((pollingStation, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">

                                <div className="bg-green-200 items-center rounded">
                                      <div className="card-body text-left text-black font-2xl font-bold">
                                        <p> জেলাঃ {pollingStation.districtName}</p>
                                    </div>
                                      <div className="card-body text-left text-black font-2xl font-bold">
                                        <p> উপজেলাঃ {pollingStation.upazilaName}</p>
                                    </div>
                                 
                                    <div className="card-body text-left text-black font-2xl font-bold">
                                        <p> ইউনিয়নঃ {pollingStation.unionName}</p>
                                    </div>
                                    <div className="card-body text-left text-black font-2xl font-bold">
                                        {/* <p>  {service.description.slice(0, 100)} tittle={service.description}</p> */}
                                        <p> ভোটকেন্দ্রঃ {pollingStation.pollingStationName}</p>
                                    </div>
                                    <diV> 
                                        
                                        <Link to={`/pollingStation/${pollingStation._id}`}

                                            className="w-2/3 flex items-center justify-center mx-6 my-2 px-8 py-3 
                                                       border border-transparent text-base font-medium 
                                                       rounded-md text-white bg-blue-500
                                                       hover:bg-blue-200 md:py-4 md:text-lg md:px-10"

                                        >
                                            বিস্তারিত..
                                            <BsArrowRightSquareFill className="inline ml-3" />  
                                        </Link>
                                        
                                    </diV>
                                </div>    
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PollingStations;