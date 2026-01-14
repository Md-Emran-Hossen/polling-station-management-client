import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const InsertPrisidingOfficer = () => {

    const [pollingStations, setPollingStations] = useState([]);
    const [psObject, setPsObject] = useState({});
    const [formData, setFormData] = useState({
        psID: '',
        pollingStationName: '',
        prisidingOffcer: '',
        mobile: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPollingStations = async () => {
            try {
                const res = await fetch('http://localhost:5000/pollingStations');

                const data = await res.json();
                setPollingStations(data);

                const tempPsObject = {};
                data.forEach(ps => {
                    tempPsObject[ps.pollingStationName] = ps._id;
                });
                setPsObject(tempPsObject);
            } catch (error) {
                console.error('Error fetching upazila:', error);
            }
        };
        fetchPollingStations();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.pollingStationName) {
            newErrors.pollingStationName = "Polling Station Name is Required";
        }
        if (!formData.prisidingOffcer) {
            newErrors.prisidingOffcer = "Prisiding Officer Name is Required";
        }
        if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is Required";
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

 const prisidingOfficerInfo = {
            psID: psObject[formData.pollingStationName],
            pollingStationName: formData.pollingStationName,
            prisidingOffcer: formData.prisidingOffcer,
            mobile: formData.mobile 
        };
        const result = await fetch('http://localhost:5000/prisidingOfficers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(prisidingOfficerInfo)
        })
        const data = await result.json();
        if (data.insertedId) {
            toast.success(`${formData.prisidingOffcer} is added successfully`);
            navigate('/dashboard/loadPrisidingOfficers');
        } else {
            toast.error('Failed to add Union information.');
        }
    };

    return (
        <div className="mx-5 px-5 ">
                    <Helmet>
                       <title> Polling Station | Add Prisiding Officer </title>
                   </Helmet>
        
                       <h2 className="text-3xl md:text-left font-bold pl-10">ভোটগ্রহণ কর্মকর্তা যুক্ত করুন</h2>
                       <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                       <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                                     
                               <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                                   <div className='flex justify-center items-center max-w-xs'>
                                       <label className="label"> <span className="label-text">ভোটকেন্দ্র নির্বাচন করুন:</span></label>
                                       <select
                                           name="pollingStationName"
                                           value={formData.pollingStationName}
                                           onChange={handleInputChange}
                                           className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
                                       >
                                           <option value="">ভোটকেন্দ্র বাছাই করুন</option>
                                           {Object.keys(psObject).map((ps, index) => (
                                               <option key={index} value={ps}>
                                                   {ps}
                                               </option>
                                           ))}
                                       </select>
                                   </div>
                                   {errors.pollingStationName && <p className='text-red-500 text-xs'>{errors.pollingStationName}</p>}
                               </div>
       
                                <div className="border p-2 border-indigo-400 mb-3">
                                   <div className="flex input-bordered rounded-none">
                                       <label className="label"> <span className="label-text">ভোটগ্রহণকারী কর্মকর্তা:</span></label>
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

export default InsertPrisidingOfficer;