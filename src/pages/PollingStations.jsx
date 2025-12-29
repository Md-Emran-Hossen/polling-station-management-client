import React from 'react';
import { useState, useEffect } from 'react';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PollingStations = () => {

    const [pollingStations, setPollingStations] = useState([]);
    const [districts, setDistricts] = useState([]);

    const [districtObject, setDistrictObject] = useState({});
    const [upazilas, setUpazilas] = useState([]);

    const [upazilaObject, setUpazilaObject] = useState({});
    const [unions, setUnions] = useState([]);

    const [unionObject, setUnionObject] = useState({});

    const [selectedValue, setSelectedValue] = useState("");

     const [formData, setFormData] = useState({
        districtID: '',
        upazilaID: '',
        unionID: ''
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    

     useEffect(() => {
            const fetchDistricts = async () => {
                try {
                    const res = await fetch('http://localhost:5000/districts');
                    const data = await res.json();
                    setDistricts(data);
                    const tempDistrictObject = {};
                    data.forEach(district => {
                        tempDistrictObject[district.districtName] = district._id;
                    });
                    setDistrictObject(tempDistrictObject);
                } catch (error) {
                    console.error('Error fetching district:', error);
                }
            };
            fetchDistricts();
        }, []);
    
        useEffect(() => {
                const fetchUpazilas = async () => {
                    try {
                        const res = await fetch('http://localhost:5000/upazilas');
                        const data = await res.json();
                        setUpazilas(data);
                        const tempUpazilaObject = {};
                        data.forEach(upazila => {
                            tempUpazilaObject[upazila.upazilaName] = upazila._id;
                        });
                        setUpazilaObject(tempUpazilaObject);
                    } catch (error) {
                        console.error('Error fetching upazila:', error);
                    }
                };
                fetchUpazilas();
            }, []);
    
        useEffect(() => {
                const fetchUnions = async () => {
                    try {
                        const res = await fetch('http://localhost:5000/unions');
                        const data = await res.json();
                        setUnions(data);
                        const tempUnionObject = {};
                        data.forEach(union => {
                            tempUnionObject[union.unionName] = union._id;
                        });
                        setUnionObject(tempUnionObject);
                    } catch (error) {
                        console.error('Error fetching union:', error);
                    }
                };
        
                fetchUnions();
            }, []);


    // useEffect(() => {
    //     fetch('http://localhost:5000/pollingStations')
    //         .then(res => res.json())
    //         .then(data => setPollingStations(data));
    // });
  //  console.log("Polling Stations Data Found", pollingStations);

   // Load items (all or filtered)

   const ssValue = {
            // districtID: districtObject[formData.districtName],
            upazilaID: upazilaObject[formData.upazilaName]
            // unionID: unionObject[formData.unionName],
        };

     useEffect(() => {
                const fetchSelectedValue = async () => {
                    try {

                        let url = "http://localhost:5000/pollingStations";
  
                        if (ssValue) {
                            url += `/pollingStation/${ssValue}`;
                        }
                        const res = await fetch(url);
                        const data = await res.json();
                      //  setSelectedValue(data);
                        const tempSelectedObject = {};
                        data.forEach(pollingStation => {
                            tempSelectedObject[pollingStation.upazilaName] = pollingStation.upazilaID;
                        });
                        setUnionObject(tempSelectedObject);
                    } catch (error) {
                        console.error('Error fetching union:', error);
                    }
                };
        
                fetchSelectedValue();
            }, []);


    // useEffect(() => {
    //   let url = "http://localhost:5000/pollingStations";
  
    //   if (selectedValue) {
    //     url += `/pollingStation/${selectedValue}`;
    //   }
    //   console.log("API VALUE:", url);
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => setPollingStations(data));
    // }, [selectedValue]);


    return (
        <div>
             <div className="text-4xl font-bold text-center text-blue-500 p-8">
                <h2>ভোটকেন্দ্রে সমূহ</h2>
            </div>
             <div className="m-5 flex justify-between">
                
                  <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">জেলা নির্বাচন করুন:</span></label>
                                <select
                                    name="districtName"
                                    value={formData.districtName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white">
                                    <option value="">জেলা বাছাই করুন</option>
                                    {Object.keys(districtObject).map((district, index) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* {errors.districtName && <p className='text-red-500 text-xs'>{errors.districtName}</p>} */}
                        </div>

                      <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">উপজেলা নির্বাচন করুন:</span></label>
                                <select
                                    name="upazilaName"
                                    value={formData.upazilaName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white">
                                    <option value="">উপজেলা বাছাই করুন</option>
                                    {Object.keys(upazilaObject).map((upazila, index) => (
                                        <option key={index} value={upazila}>
                                            {upazila}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>} */}
                        </div>

                  <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">ইউনিয়ন নির্বাচন করুন:</span></label>
                                <select
                                    name="unionName"
                                    value={formData.unionName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white">
                                    <option value="">ইউনিয়ন বাছাই করুন</option>
                                    {Object.keys(unionObject).map((union, index) => (
                                        <option key={index} value={union}>
                                            {union}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* {errors.unionName && <p className='text-red-500 text-xs'>{errors.unionName}</p>} */}
                        </div>
              
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