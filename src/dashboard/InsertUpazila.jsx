import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const InsertUpazila = () => {

    const [districts, setDistricts] = useState([]);
    const [districtObject, setDistrictObject] = useState({});
    const [formData, setFormData] = useState({
        districtID: '',
        districtName: '',
        upazilaName: ''
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
                // console.log("INNER VALUE:=",tempDistrictObject);
                setDistrictObject(tempDistrictObject);
            } catch (error) {
                console.error('Error fetching district:', error);
            }
        };

        fetchDistricts();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.upazilaName) {
            newErrors.upazilaName = "Upazila name is Required";
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

 const upazila = {
            districtID: districtObject[formData.districtName],
            districtName: formData.districtName,
            upazilaName: formData.upazilaName 
        };
        // console.log("District, Upazila, District ID:", upazila.districtName,upazila.upazilaName,upazila.districtID);
        // Save Services information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/upazilas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(upazila)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.upazilaName} is added successfully`);
            navigate('/dashboard/loadUpazilas');
        } else {
            toast.error('Failed to add Upazila information.');
        }
    };

    return (
         <div className="mx-5 px-5 ">
             <Helmet>
                <title> Polling Station | Add Upazila </title>
            </Helmet>
 
                <h2 className="text-3xl md:text-left font-bold pl-10">উপজেলা যুক্ত করুন</h2>
                <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                              
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">জেলা নির্বাচন করুন:</span></label>
                                <select
                                 //   id = {formData._id}
                                    name="districtName"
                                    value={formData.districtName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
                                >
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

                         <div className="border p-2 border-indigo-400 mb-3">
                            <div className="flex input-bordered rounded-none">
                                <label className="label"> <span className="label-text">উপজেলা:</span></label>
                                <input
                                    type="text"
                                    name="upazilaName"
                                    value={formData.upazilaName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>}
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

export default InsertUpazila;