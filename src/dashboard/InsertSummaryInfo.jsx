import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const InsertSummaryInfo = () => {

    const [upazilas, setUpazilas] = useState([]);
    const [upazilaObject, setUpazilaObject] = useState({});

    const [formData, setFormData] = useState({
            districtID: '',
            districtName: '',
            numberOfUnion: '',
            numberOfPourosova: '',
            permanentPollingStation: '',
            temporaryPollingStation: '',
            totalPollingStation: '',
            permanentBooth: '',
            temporaryBooth: '',
            totalBooth: '',
            maleVoter: '',
            femaleVoter: '',
            thirdGender: '',
            totalVoter: '',
            comments: '' 
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
                        setUpazilaObject(tempUpazilaObject);
                    } catch (error) {
                        console.error('Error fetching upazila:', error);
                    }
                };
                fetchUpazilas();
            }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.numberOfUnion) {
            newErrors.numberOfUnion = "Number of Union is Required";
        } 
        if (!formData.numberOfPourosova) {
            newErrors.numberOfPourosova = "Number of Pourosova is Required";
        }
        if (!formData.permanentPollingStation) {
            newErrors.permanentPollingStation = "Permanent Polling Station name is Required";
        }
        if (!formData.temporaryPollingStation) {
            newErrors.temporaryPollingStation = "Temporary Polling Station is Required";
        } 
        if (!formData.totalPollingStation) {
            newErrors.totalPollingStation = "Total Polling is Required";
        }
        if (!formData.permanentBooth) {
            newErrors.permanentBooth = "Permanent Booth is Required";
        }
        if (!formData.temporaryBooth) {
            newErrors.temporaryBooth = "Temporary Booth is Required";
        } 
        if (!formData.totalBooth) {
            newErrors.totalBooth = "Total Booth is Required";
        }
        if (!formData.maleVoter) {
            newErrors.maleVoter = "Male Voter is Required";
        } 
        if (!formData.femaleVoter) {
            newErrors.femaleVoter = "Female Voter is Required";
        }
        if (!formData.thirdGender) {
            newErrors.thirdGender = "Third Gender is Required";
        }
        if (!formData.totalVoter) {
            newErrors.totalVoter = "Total Voter is Required";
        } 
        if (!formData.comments) {
            newErrors.comments = "Comments is Required";
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

        const summaryInfo = {
            dupazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            numberOfUnion: formData.numberOfUnion,
            numberOfPourosova: formData.numberOfPourosova,
            permanentPollingStation: formData.permanentPollingStation,
            temporaryPollingStation: formData.temporaryPollingStation,
            totalPollingStation: formData.totalPollingStation,
            permanentBooth: formData.permanentBooth,
            temporaryBooth: formData.temporaryBooth,
            totalBooth: formData.totalBooth,
            maleVoter: formData.maleVoter,
            femaleVoter: formData.femaleVoter,
            thirdGender: formData.thirdGender,
            totalVoter: formData.totalVoter,
            comments: formData.comments
        };

        // Save Services information to the database
        const result = await fetch('http://localhost:5000/summaryInformations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(summaryInfo)
        })
        const data = await result.json();
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.upazilaName} is added successfully`);
            navigate('/dashboard/loadSummaryInformations');
        } else {
            toast.error('Failed to add Summary information.');
        }
    };
    return (
        <div>
             {/* <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">জেলার নাম যুক্ত করুন</h2> */}
        <div className="mx-auto mt-5 p-2">
           <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
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
                            {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>}
                        </div>
                        
                        <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মোট ইউনিয়নের সংখ্যা:</span></label>
                                <input
                                    type="text"
                                    name="numberOfUnion"
                                    value={formData.numberOfUnion}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.numberOfUnion && <p className='text-red-500 text-xs'>{errors.numberOfUnion}</p>}
                        </div>
                    
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মোট পৌরসভার সংখ্যা:</span></label>
                                <input
                                    type="text"
                                    name="numberOfPourosova"
                                    value={formData.numberOfPourosova}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.numberOfPourosova && <p className='text-red-500 text-xs'>{errors.numberOfPourosova}</p>}
                        </div>
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">স্থায়ী ভোট কেন্দ্র:</span></label>
                                <input
                                    type="text"
                                    name="permanentPollingStation"
                                    value={formData.permanentPollingStation}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.permanentPollingStation && <p className='text-red-500 text-xs'>{errors.permanentPollingStation}</p>}
                        </div>
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">অস্থায়ী ভোট কেন্দ্র:</span></label>
                                <input
                                    type="text"
                                    name="temporaryPollingStation"
                                    value={formData.temporaryPollingStation}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.temporaryPollingStation && <p className='text-red-500 text-xs'>{errors.temporaryPollingStation}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মোট ভোট কেন্দ্র:</span></label>
                                <input
                                    type="text"
                                    name="totalPollingStation"
                                    value={formData.totalPollingStation}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.totalPollingStation && <p className='text-red-500 text-xs'>{errors.totalPollingStation}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">স্থায়ী ভোটকক্ষ:</span></label>
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
                                <label className="label"> <span className="label-text">অস্থায়ী ভোটকক্ষ:</span></label>
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
                                <label className="label"> <span className="label-text">মোট ভোটকক্ষের সংখ্যা:</span></label>
                                <input
                                    type="text"
                                    name="totalBooth"
                                    value={formData.totalBooth}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.totalBooth && <p className='text-red-500 text-xs'>{errors.totalBooth}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">পুরুষ ভোটার:</span></label>
                                <input
                                    type="text"
                                    name="maleVoter"
                                    value={formData.maleVoter}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.maleVoter && <p className='text-red-500 text-xs'>{errors.maleVoter}</p>}
                        </div>
                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">মহিলা ভোটার:</span></label>
                                <input
                                    type="text"
                                    name="femaleVoter"
                                    value={formData.femaleVoter}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.femaleVoter && <p className='text-red-500 text-xs'>{errors.femaleVoter}</p>}
                        </div>

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">হিজড়া:</span></label>
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
                                <label className="label"> <span className="label-text">মন্তব্য:</span></label>
                                <input
                                    type="text"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.comments && <p className='text-red-500 text-xs'>{errors.comments}</p>}
                        </div>

                        <div className="mx-5 px-5">
                             <input className='btn btn-info md:w-80 w-64 rounded-none mt-1' value="সংরক্ষণ করুন" type="submit" />
                        </div>
                    </div>
                </form>
        </div>
        <br/>   
        <br/>   
        <br/>
     </div>
    );
};

export default InsertSummaryInfo;