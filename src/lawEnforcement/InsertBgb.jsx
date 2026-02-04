import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const InsertBgb = () => {

    const [formData, setFormData] = useState({
        upazilaID: '',
        upazilaName: '',
        bgbName: '',
        designation: '',
        mobile: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [upazilas, setUpazilas] = useState([]);
    const [upazilaObject, setUpazilaObject] = useState({});

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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.upazilaName) {
            newErrors.upazilaName = "Upazila name is Required";
        }
        if (!formData.bgbName) {
            newErrors.bgbName = "BGB name is Required";
        }
        if (!formData.designation) {
            newErrors.designation = "Designation is Required";
        }
        if (!formData.mobile) {
            newErrors.mobile = "Mobile number is Required";
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

        const bgbInfo = {
            upazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            bgbName: formData.bgbName,
            designation: formData.designation,
            mobile: formData.mobile,
        };

        // Save Police information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/bgbs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bgbInfo)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.bgbName} is added successfully`);
            navigate('/lawEnforcement/loadBgb');
        } else {
            toast.error('Failed to add BGB information.');
        }
};

    return (
        <div>
             <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">বর্ডার গার্ড বাংলাদেশ এর তথ্য যুক্ত করুন</h2>
           <div className="mx-auto mt-5 p-2">
            <form onSubmit={handleSubmit} className="w-full">

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"> 
                            <span className="label-text">উপজেলা নির্বাচন করুন:</span>
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <select
                            name="upazilaName"
                            value={formData.upazilaName}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            নাম:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="bgbName"
                            value={formData.bgbName}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.bgbName && <p className='text-red-500 text-xs'>{errors.bgbName}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            পদবি:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.designation && <p className='text-red-500 text-xs'>{errors.designation}</p>}
                </div>

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            মোবাইল:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.mobile && <p className='text-red-500 text-xs'>{errors.mobile}</p>}
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">

                        <input
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
                       font-bold py-2 px-4 mb-10 rounded"
                            value="সংরক্ষণ করুন"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
           </div> 
        </div>
    );
};

export default InsertBgb;