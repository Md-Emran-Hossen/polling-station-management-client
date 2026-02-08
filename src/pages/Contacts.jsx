import React from 'react';
import { useState, useEffect } from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState("");
            
            // Load Upazila
            useEffect(() => { 
                fetch("https://polling-station-management-server.vercel.app/upazilas")
                    .then(res => res.json())
                    .then(data => setUpazilas(data));
                }, []);
            
            // Load by selected Upazila items (all or filtered)
            useEffect(() => {
                let url = "https://polling-station-management-server.vercel.app/contacts";
                    if (selectedUpazila) {
                        url += `/contact/${selectedUpazila}`;
                    }
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setContacts(data));
            }, [selectedUpazila]);
    return (
        <div>
            <div className="form-control sm:w-1/4 border border-indigo-400 m-10 p-2">
                <div className='flex justify-center items-center max-w-xs'>
                    <select
                      value={selectedUpazila}
                      // disabled={true}
                      onChange={(e) => setSelectedUpazila(e.target.value)}
                    >
                      <option value=""> উপজেলা নির্বাচন করুন </option>
                      {upazilas.map(upa => (
                        <option key={upa._id} value={upa._id}>
                          {upa.upazilaName}
                        </option>
                       ))}
                    </select>
                 </div>
            </div>  
            <h2 className="card-title ml-10 pl-2 underline">অন্যান্য যোগাযোগঃ</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-5 p-5">
              {contacts.map(contact =>(
                <li key={contact._id}>

                <div className="card transition duration-300 ease-in-out hover:scale-110">
                  <div className="card-body bg-blue-200">
                        <div className="grid grid-cols-2 gap-1">  
                            <div className="text-green-600 text-left">নামঃ</div>  
                            <div className="text-left"> {contact.contactPersonName} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-green-600 text-left">পদবিঃ</div>  
                            <div className="text-left">   {contact.designation} </div>                                                            
                        </div>
                         <div className="grid grid-cols-2 gap-1">  
                            <div className="text-green-600 text-left"> মোবাইলঃ </div>  
                            <div className="text-left">  {contact.mobile} </div>                                                            
                        </div>                       
                  </div>
                </div>
                </li>
              ))}
            </div>

            {/* <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className="bg-green-50 font-bold text-xl">
                            <th>ক্রম</th>
                            <th>উপজেলা</th>
                            <th>নাম</th>
                            <th>পদবি</th>
                            <th>মোবাইল</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                        <tr key={contact._id || index}
                            className="hover:bg-gray-100"
                        >
                            <td>{toBN(index + 1)}</td>
                            <td>{contact.upazilaName}</td>
                            <td>{contact.contactPersonName}</td>
                            <td>{contact.designation}</td>
                            <td>{contact.mobile}</td>                                         
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default Contacts;