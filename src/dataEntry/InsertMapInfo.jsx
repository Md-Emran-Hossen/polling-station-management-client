import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const InsertMapInfo = () => {
    const [upazilas, setUpazilas] = useState([]);
    const [upazilaObject, setUpazilaObject] = useState({});
    const [formData, setFormData] = useState({
        upazilaID: '',
        upazilaName: '',
        unionName: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
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
        if (!formData.mapLink) {
            newErrors.mapLink = "Map link is Required";
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
 const map = {
            upazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            mapLink: formData.mapLink 
        };
        const result = await fetch('https://polling-station-management-server.vercel.app/maps', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(map)
        })
        const data = await result.json();
        if (data.insertedId) {
            toast.success(`${formData.upazilaName} is added successfully`);
            navigate('/dataEntry/loadMaps');
        } else {
            toast.error('Failed to add Union information.');
        }
    };
    return (
        <div className="mx-auto">
             <Helmet>
                <title> Polling Station | Add Map Info </title>
            </Helmet>
 
                <h2 className="text-xl md:text-left font-bold pl-10">ম্যাপের তথ্য যুক্ত করুন</h2>
                <form onSubmit={handleSubmit} className="border shadow-lg py-1 px-1 m-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">                    
                        <div className="w-8/9 border border-indigo-400">
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
                                <div>
                                    <label className="label"> 
                                        <span className="text-black pl-2 pt-2">
                                            উপজেলা:
                                        </span>
                                    </label>
                                </div>
                                <div className="m-2">
                                    <select
                                        name="upazilaName"
                                        value={formData.upazilaName}
                                        onChange={handleInputChange}
                                        className="input input-bordered max-w-xs rounded-none text-sm bg-white"
                                    >
                                    <option value="">উপজেলা বাছাই করুন</option>
                                        {Object.keys(upazilaObject).map((upazila, index) => (
                                            <option key={index} value={upazila}>
                                                {upazila}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors.upazilaName && <p className='text-red-500 text-xs'>{errors.upazilaName}</p>}
                        </div>
                        <div className="w-8/9 border border-indigo-400">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                                <div>
                                    <label className="label"> 
                                        <span className="text-black pl-2 pt-2">
                                            ম্যাপের লিংক:
                                        </span>
                                    </label>
                                </div>
                                <div className="m-2">
                                    <input
                                        type="text"
                                        name="mapLink"
                                        value={formData.mapLink}
                                        onChange={handleInputChange}
                                        className="input input-bordered rounded-none bg-white"
                                    />
                                </div>
                            </div>
                            {errors.mapLink && <p className='text-red-500 text-xs'> {errors.mapLink} </p>}
                        </div>
                        <div className="mx-auto">
                             <input className='btn btn-info md:w-70 w-60 rounded-none mt-1' value="সংরক্ষণ করুন" type="submit" />
                        </div>
                    </div>
                </form>
                <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    );
};

export default InsertMapInfo;