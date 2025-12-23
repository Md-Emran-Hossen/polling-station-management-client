import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const InsertDistrict = () => {

    const [formData, setFormData] = useState({
        districtName: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.districtName) {
            newErrors.districtName = "District name is Required";
        }
        if (!formData.description) {
            newErrors.description = "Description is Required";
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

        const district = {
            districtName: formData.districtName,
            description: formData.description,
        };

        // Save Services information to the database
        const result = await fetch('http://localhost:5000/districts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(district)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.districtName} is added successfully`);
            navigate('/dashboard/districts');
        } else {
            toast.error('Failed to add education information.');
        }
};
return (
    <div>
        <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">জেলার নাম যুক্ত করুন</h2>
        <div className="mx-auto mt-5 p-2">
            <form onSubmit={handleSubmit} className="w-full">

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            জেলার নাম:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="districtName"
                            value={formData.districtName}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.districtName && <p className='text-red-500 text-xs'>{errors.districtName}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            বর্ণনা:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.description && <p className='text-red-500 text-xs'>{errors.description}</p>}
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">

                        <input
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
                       font-bold py-2 px-4 mb-10 rounded"
                            value="যুক্তকরুন"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
   
    );
};

export default InsertDistrict;