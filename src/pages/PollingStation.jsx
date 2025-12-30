import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const PollingStation = () => {

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [upazilas, setUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const [unions, setUnions] = useState([]);
  const [selectedUnion, setSelectedUnion] = useState("");

  const [pollingStations, setPollingStations] = useState([]);

  // Load District
  useEffect(() => {
    fetch("http://localhost:5000/districts")
      .then(res => res.json())
      .then(data => setDistricts(data));
  }, []);

  // Load Upazila
  useEffect(() => { 
    fetch(`http://localhost:5000/loadUpazila/${selectedDistrict}`)
      .then(res => res.json())
      .then(data => setUpazilas(data));
  }, [selectedDistrict]);

  // Load Union
  useEffect(() => {
    fetch(`http://localhost:5000/loadUnion/${selectedUpazila}`)
      .then(res => res.json())
      .then(data => setUnions(data));
  }, [selectedUpazila]);

   // Load by selected District items (all or filtered)
  useEffect(() => {
    let url = "http://localhost:5000/pollingStations";

    if (selectedDistrict) {
      url += `/pollingStation/${selectedDistrict}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setPollingStations(data));
  }, [selectedDistrict]);


  // Load by selected Upazila items (all or filtered)
  useEffect(() => {

    let url = "http://localhost:5000/pollingStations";

    if (selectedUpazila) {
      url += `/pollingStation/upazila/${selectedUpazila}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setPollingStations(data));
  }, [selectedUpazila]);

  // Load by selected Union items (filtered)
  useEffect(() => {

    let url = "http://localhost:5000/pollingStations";

    if (selectedUnion) {
      url += `/pollingStation/union/${selectedUnion}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setPollingStations(data));
  }, [selectedUnion]);

  return (
    <div>
       <div className="m-5 flex justify-between">
                  <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <select
                                    value={selectedDistrict}
                                        onChange={(e) => setSelectedDistrict(e.target.value)}
                                      >
                                        <option value=""> জেলা নির্বাচন করুন </option>
                                        {districts.map(dist => (
                                          <option key={dist._id} value={dist._id}>
                                            {dist.districtName}
                                          </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                         <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <select
                                    value={selectedUpazila}
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

                          <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <select
                                   value={selectedUnion}
                                        onChange={(e) => setSelectedUnion(e.target.value)}
                                      >
                                        <option value=""> ইউনিয়ন নির্বাচন করুন </option>
                                        {unions.map(union => (
                                          <option key={union._id} value={union._id}>
                                            {union.unionName}
                                          </option>
                                        ))}
                                </select>
                            </div>
                        </div>
            </div>

      {/* Data Display */}
      {/* <ul> */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 my-5">
        {pollingStations.map(pollingStation => (
          <li key={pollingStation._id}>
                        <div className="card transition duration-300 ease-in-out hover:scale-110">

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
                 

            {/* {pollingStation.pollingStationName} */}
          </li>
        ))}
      </div>
      {/* </ul> */}
    </div>
  );
};

export default PollingStation;