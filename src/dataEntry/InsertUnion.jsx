import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const InsertUnion = () => {

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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.unionName) {
            newErrors.unionName = "Union name is Required";
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
            upazilaID: upazilaObject[formData.upazilaName],
            upazilaName: formData.upazilaName,
            unionName: formData.unionName 
        };
      //  console.log("Upazila, Union, Upazila ID:", union.upazilaName, union.unionName, union.upazilaID);
        // Save Services information to the database
        const result = await fetch('https://polling-station-management-server.vercel.app/unions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(upazila)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            toast.success(`${formData.unionName} is added successfully`);
            navigate('/dataEntry/loadUnions');
        } else {
            toast.error('Failed to add Union information.');
        }
    };

    return (
         <div className="mx-5 px-5 ">
             <Helmet>
                <title> Polling Station | Add Union </title>
            </Helmet>
 
                <h2 className="text-3xl md:text-left font-bold pl-10">ইউনিয়ন যুক্ত করুন</h2>
                <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                              
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">ইউনিয়ন নির্বাচন করুন:</span></label>
                                <select
                                 //   id = {formData._id}
                                    name="upazilaName"
                                    value={formData.upazilaName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
                                >
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
                                <label className="label"> <span className="label-text">ইউনিয়ন:</span></label>
                                <input
                                    type="text"
                                    name="unionName"
                                    value={formData.unionName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full rounded-none bg-white"
                                />
                            </div>
                            {errors.unionName && <p className='text-red-500 text-xs'>{errors.unionName}</p>}
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

export default InsertUnion;