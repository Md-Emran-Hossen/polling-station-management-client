import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const InsertAnsar = () => {

     const [formData, setFormData] = useState({
        upazilaID: '',
        upazilaName: '',
        ansarName: '',
        designation: '',
        mobile: '',
        attachedArea: ''
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
        // if (!formData.rabName) {
        //     newErrors.rabName = "RAB Name name is Required";
        // }
        // if (!formData.designation) {
        //     newErrors.designation = "Designation is Required";
        // }
        // if (formData.mobile.length !== 11) {
        //     newErrors.mobile = "Mobile should be 11 digit";
        // }
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

        const ansarInfo = {
            upazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            ansarName: formData.ansarName,
            designation: formData.designation,
            mobile: formData.mobile,
            attachedArea: formData.attachedArea,
        };

        // Save Rab information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/ansars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ansarInfo)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            toast.success(`${formData.ansarInfo} is added successfully`);
            navigate('/lawEnforcement/loadAnsar');
        } else {
            toast.error('Failed to add Ansar information.');
        }
};

    return (
         <div>
             <h2 className="text-xl md:text-center font-bold mt-5 p-2 underline">আনসার ভিডিপি এর তথ্য যুক্ত করুন</h2>
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
                            নামঃ
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="ansarName"
                            value={formData.ansarName}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.ansarName && <p className='text-red-500 text-xs'>{errors.ansarName}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            পদবিঃ
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
                           অধিক্ষেত্রঃ
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <textarea
                            type="text"
                            id="attachedArea"
                            name="attachedArea"
                            rows={4}
                            value={formData.attachedArea}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.attachedArea && <p className='text-red-500 text-xs'>{errors.attachedArea}</p>}
                </div>

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            মোবাইলঃ
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

export default InsertAnsar;
