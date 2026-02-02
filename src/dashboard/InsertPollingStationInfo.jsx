import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import axios from 'axios';

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
        pollingStationNo: '',
        pollingStationName: '',
        numberOfBooth: '',
        wordNoAndVillage: '',
        pollingStationType: '',
        permanentBooth: '',
        temporaryBooth: '',
        male: '',
        female: '',
        thirdGender: '',
        totalVoter: '',
        parliamentarySeat: '',
        mapInfo: '',
        prisidingOffcer: '',
        mobile: '',
        subInspector: '',
        siMobile: ''
    }); 
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const res = await fetch('https://polling-station-management-server.vercel.app/districts');
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
                    const res = await fetch('https://polling-station-management-server.vercel.app/upazilas');
    
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
                    const res = await fetch('https://polling-station-management-server.vercel.app/unions');
    
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

    const validateForm = () => {
        const newErrors = {};

        if (!formData.districtName) {
            newErrors.districtName = "District Name is Required";
        }
        if (!formData.upazilaName) {
            newErrors.upazilaName = "Upazila Name is Required";
        }
        if (!formData.unionName) {
            newErrors.unionName = "Union Name is Required";
        }
        if (!formData.pollingStationNo) {
            newErrors.pollingStationNo = "Polling Station No. is Required";
        }
        if (!formData.pollingStationName) {
            newErrors.pollingStationName = "Polling Station Name is Required";
        }
        if (!formData.numberOfBooth) {
            newErrors.numberOfBooth = "Number of Booth is Required";
        }
        if (!formData.wordNoAndVillage) {
            newErrors.wordNoAndVillage = "Village and word no. is Required";
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

        if (!formData.prisidingOffcer) {
            newErrors.prisidingOffcer = "Prisiding Offcer is Required";
        }
        if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is Required";
        }
        if (!formData.subInspector) {
            newErrors.subInspector = "Sub Inspector name is Required";
        }
        if (!formData.siMobile) {
            newErrors.siMobile = "Sub Inspector Mobile Number is Required";
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
            pollingStationNo: formData.pollingStationNo,
            pollingStationName: formData.pollingStationName,
            numberOfBooth: formData.numberOfBooth,
            wordNoAndVillage: formData.wordNoAndVillage,
            pollingStationType: formData.pollingStationType,
            permanentBooth: formData.permanentBooth,
            temporaryBooth: formData.temporaryBooth,
            male: formData.male,
            female: formData.female,
            thirdGender: formData.thirdGender,
            totalVoter: formData.totalVoter,
            parliamentarySeat: formData.parliamentarySeat,
            mapInfo: formData.mapInfo,
            prisidingOffcer: formData.prisidingOffcer,
            mobile: formData.mobile,
            subInspector: formData.subInspector,
            siMobile: formData.siMobile 
        };

        // Save Polling Station information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/pollingStations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(pollingStation)
        })
        const data = await result.json();
        if (data.insertedId) {
            toast.success(`${formData.pollingStationName} is added successfully`);
            navigate('/dashboard/loadPollingStations');
        } else {
            toast.error('Failed to add Polling Station information.');
        }
    };
    return (
       <div className="mx-5 px-5 ">
             <Helmet>
                <title> Polling Station | Polling Station Information </title>
            </Helmet>
 
                {/* <h2 className="text-3xl md:text-left font-bold pl-10">উপজেলা যুক্ত করুন</h2> */}
                <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
                              
                        <div className="border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center'>
                                <label className="label"> <span className="label-text">জেলা নির্বাচন করুন:</span></label>
                                <select
                                    name="districtName"
                                    value={formData.districtName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none text-sm bg-white">
                                    <option value="" className="font-bold">জেলা বাছাই করুন</option>
                                    {Object.keys(districtObject).map((district, index) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.districtName && <p className='text-red-500 text-xs'>{errors.districtName}</p>}
                        </div>

                        <div className="border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center'>
                                <label className="label"> <span className="label-text">উপজেলা নির্বাচন করুন:</span></label>
                                <select
                                    name="upazilaName"
                                    value={formData.upazilaName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none text-sm bg-white"
                                >
                                    <option value="" className="font-bold">উপজেলা বাছাই করুন</option>
                                    {Object.keys(upazilaObject).map((upazila, index) => (
                                        <option key={index} value={upazila}>
                                            {upazila}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>}
                        </div>
                        <div className="border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center'>
                                <label className="label"> <span className="label-text">ইউনিয়ন নির্বাচন করুন:</span></label>
                                <select
                                    name="unionName"
                                    value={formData.unionName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none text-sm bg-white"
                                >
                                    <option value="" className="font-bold">ইউনিয়ন বাছাই করুন</option>
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
                                <label className="label"> <span className="label-text">ভোটকেন্দ্র নং:</span></label>
                                <input
                                    type="text"
                                    name="pollingStationNo"
                                    value={formData.pollingStationNo}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.pollingStationNo && <p className='text-red-500 text-xs'>{errors.pollingStationNo}</p>}
                        </div>
                
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">ভোটকেন্দ্রের নাম ও অবস্থান:</span></label>
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
                                <label className="label"> <span className="label-text">ভোটকক্ষের সংখ্যা:</span></label>
                                <input
                                    type="text"
                                    name="numberOfBooth"
                                    value={formData.numberOfBooth}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.numberOfBooth && <p className='text-red-500 text-xs'>{errors.numberOfBooth}</p>}
                        </div>
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">গ্রামের নাম এবং ওয়ার্ড নং:</span></label>
                                <input
                                    type="text"
                                    name="wordNoAndVillage"
                                    value={formData.wordNoAndVillage}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.wordNoAndVillage && <p className='text-red-500 text-xs'>{errors.wordNoAndVillage}</p>}
                        </div>

                         {/* <div className="border p-2 border-indigo-400 mb-3">
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
                        </div> */}

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
                                <label className="label"> <span className="label-text">গুগল ম্যাপে অবস্থান:</span></label>
                                <input
                                    type="text"
                                    name="mapInfo"
                                    value={formData.mapInfo}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.mapInfo && <p className='text-red-500 text-xs'>{errors.mapInfo}</p>}
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
                                <label className="label"> <span className="label-text">নির্বাচনী এলাকার নম্বর ও নাম:</span></label>
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
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">প্রিজাইডিং অফিসার:</span></label>
                                <input
                                    type="text"
                                    name="prisidingOffcer"
                                    value={formData.prisidingOffcer}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.prisidingOffcer && <p className='text-red-500 text-xs'>{errors.prisidingOffcer}</p>}
                        </div>
                            <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মোবাইল:</span></label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.mobile && <p className='text-red-500 text-xs'>{errors.mobile}</p>}
                        </div>


                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">কেন্দ্রের দায়িত্বপ্রাপ্ত এসআই:</span></label>
                                <input
                                    type="text"
                                    name="subInspector"
                                    value={formData.subInspector}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.subInspector && <p className='text-red-500 text-xs'>{errors.subInspector}</p>}
                        </div>
                        <div className="border border-indigo-400 p-2 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">এস আই মোবাইল:</span></label>
                                <input
                                    type="text"
                                    name="siMobile"
                                    value={formData.siMobile}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.siMobile && <p className='text-red-500 text-xs'>{errors.siMobile}</p>}
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