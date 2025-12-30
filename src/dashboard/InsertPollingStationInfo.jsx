import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const InsertPollingStationInfo = () => {
    const [districts, setDistricts] = useState([]);
    const [districtObject, setDistrictObject] = useState({});

    const [upazilas, setUpazilas] = useState([]);
    const [upazilaObject, setUpazilaObject] = useState({});

    const [unions, setUnions] = useState([]);
    const [unionObject, setUnionObject] = useState({});

    const [formData, setFormData] = useState({
        districtID: '',
        districtName: '',
        upazilaID: '',
        upazilaName: '',
        unionID: '',
        unionName: '',

        pollingStationName: '',
        pollingStationLocation: '',
        pollingStationType: '',
        permanentBooth: '',
        temporaryBooth: '',
        male: '',
        female: '',
        thirdGender: '',
        totalVoter: '',
        parliamentarySeat: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const res = await fetch('https://polling-station-management-server.vercel.app/districts');

                const data = await res.json();
            //    console.log("District Information:= ", data);
                setDistricts(data);

                const tempDistrictObject = {};
                data.forEach(district => {
                    tempDistrictObject[district.districtName] = district._id;
                });
             //   console.log("INNER VALUE:=",tempDistrictObject);
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
                    const res = await fetch('https://polling-station-management-server.vercel.app/upazilas');
    
                    const data = await res.json();
                //    console.log("Upazila Information:= ", data);
                    setUpazilas(data);
    
                    const tempUpazilaObject = {};
                    data.forEach(upazila => {
                        tempUpazilaObject[upazila.upazilaName] = upazila._id;
                    });
                   // console.log("INNER VALUE:=",tempDistrictObject);
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
                    const res = await fetch('hhttps://polling-station-management-server.vercel.app/unions');
    
                    const data = await res.json();
                //    console.log("Upazila Information:= ", data);
                    setUnions(data);
    
                    const tempUnionObject = {};
                    data.forEach(union => {
                        tempUnionObject[union.unionName] = union._id;
                    });
                   // console.log("INNER VALUE:=",tempDistrictObject);
                    setUnionObject(tempUnionObject);
                } catch (error) {
                    console.error('Error fetching union:', error);
                }
            };
            fetchUnions();
        }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.pollingStationName) {
            newErrors.pollingStationName = "Polling Station Name is Required";
        }
        if (!formData.pollingStationLocation) {
            newErrors.pollingStationLocation = "Polling Station Location is Required";
        }
        if (!formData.pollingStationType) {
            newErrors.pollingStationType = "Polling Station Type is Required";
        }
        if (!formData.permanentBooth) {
            newErrors.permanentBooth = "Permanent Booth name is Required";
        }
        if (!formData.temporaryBooth) {
            newErrors.temporaryBooth = "Temporary Booth is Required";
        }
        if (!formData.male) {
            newErrors.male = "Male is Required";
        }
        if (!formData.female) {
            newErrors.female = "Female is Required";
        }
        if (!formData.thirdGender) {
            newErrors.thirdGender = "Third Gender is Required";
        }
        if (!formData.totalVoter) {
            newErrors.totalVoter = "Total Voter is Required";
        }
        if (!formData.parliamentarySeat) {
            newErrors.parliamentarySeat = "parliamentary Seat is Required";
        }
     
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

 const pollingStation = {
            districtID: districtObject[formData.districtName],
            districtName: formData.districtName,
            upazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            unionID: unionObject[formData.unionName],
            unionName: formData.unionName, 

            pollingStationName: formData.pollingStationName,
            pollingStationLocation: formData.pollingStationLocation,
            pollingStationType: formData.pollingStationType,
            permanentBooth: formData.permanentBooth,
            temporaryBooth: formData.temporaryBooth,
            male: formData.male,
            female: formData.female,
            thirdGender: formData.thirdGender,
            totalVoter: formData.totalVoter,
            parliamentarySeat: formData.parliamentarySeat 

        };
       
        // Save Services information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/pollingStations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(pollingStation)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.pollingStationName} is added successfully`);
            navigate('/dashboard/loadPollingStations');
        } else {
            toast.error('Failed to add Upazila information.');
        }
    };
    return (
       <div className="mx-5 px-5 ">
             <Helmet>
                <title> Polling Station | Polling Station Information </title>
            </Helmet>
 
                <h2 className="text-3xl md:text-left font-bold pl-10">উপজেলা যুক্ত করুন</h2>
                <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                              
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
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
                            {errors.districtName && <p className='text-red-500 text-xs'>{errors.districtName}</p>}
                        </div>

                           <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">ইউনিয়ন নির্বাচন করুন:</span></label>
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
                            {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>}
                        </div>


                           <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
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
                            {errors.unionName && <p className='text-red-500 text-xs'>{errors.unionName}</p>}
                        </div>


                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">ভোটকেন্দ্রের নাম:</span></label>
                                <input
                                    type="text"
                                    name="pollingStationName"
                                    value={formData.pollingStationName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.pollingStationName && <p className='text-red-500 text-xs'>{errors.pollingStationName}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">ভোটকেন্দ্রের ঠিকানা:</span></label>
                                <input
                                    type="text"
                                    name="pollingStationLocation"
                                    value={formData.pollingStationLocation}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.pollingStationLocation && <p className='text-red-500 text-xs'>{errors.pollingStationLocation}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">ভোটকেন্দ্রের ধরন:</span></label>
                                <input
                                    type="text"
                                    name="pollingStationType"
                                    value={formData.pollingStationType}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.pollingStationType && <p className='text-red-500 text-xs'>{errors.pollingStationType}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">স্থায়ী বুথ:</span></label>
                                <input
                                    type="text"
                                    name="permanentBooth"
                                    value={formData.permanentBooth}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.permanentBooth && <p className='text-red-500 text-xs'>{errors.permanentBooth}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">অস্থায়ী বুথ:</span></label>
                                <input
                                    type="text"
                                    name="temporaryBooth"
                                    value={formData.temporaryBooth}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.temporaryBooth && <p className='text-red-500 text-xs'>{errors.temporaryBooth}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">পুরুষ ভোটার:</span></label>
                                <input
                                    type="text"
                                    name="male"
                                    value={formData.male}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.male && <p className='text-red-500 text-xs'>{errors.male}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মহিলা ভোটার:</span></label>
                                <input
                                    type="text"
                                    name="female"
                                    value={formData.female}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.female && <p className='text-red-500 text-xs'>{errors.female}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">তৃতীয় লিঙ্গ:</span></label>
                                <input
                                    type="text"
                                    name="thirdGender"
                                    value={formData.thirdGender}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.thirdGender && <p className='text-red-500 text-xs'>{errors.thirdGender}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মোট ভোটার:</span></label>
                                <input
                                    type="text"
                                    name="totalVoter"
                                    value={formData.totalVoter}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.totalVoter && <p className='text-red-500 text-xs'>{errors.totalVoter}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">সংসদীয় আসন:</span></label>
                                <input
                                    type="text"
                                    name="parliamentarySeat"
                                    value={formData.parliamentarySeat}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.parliamentarySeat && <p className='text-red-500 text-xs'>{errors.parliamentarySeat}</p>}
                        </div>

                        <div className="mx-5 px-5">
                             <input className='btn btn-info md:w-80 w-64 rounded-none mt-1' value="সংরক্ষণ করুন" type="submit" />
                        </div>
                    </div>
                </form>
                  <br />
                        <br />
                         <br />
                        <br />
                         <br />
                        <br />
        </div>
    );
};

export default InsertPollingStationInfo;