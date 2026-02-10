import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import "./Modal.css";

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title font-bold p-2">{title}</h4>
          <button onClick={onClose} className="modal-close-button p-2">&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-close-footer-button">Close</button>
        </div>
      </div>
    </div>
   );
  };

const PollingStation = () => {

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [upazilas, setUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const [unions, setUnions] = useState([]);
  const [selectedUnion, setSelectedUnion] = useState("");

  const [pollingStations, setPollingStations] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Load District
    useEffect(() => {
      fetch("https://polling-station-management-server.vercel.app/districts")
        .then(res => res.json())
        .then(data => setDistricts(data));
    }, []);
  
    // Load Upazila
    useEffect(() => { 
      fetch("https://polling-station-management-server.vercel.app/upazilas")
        .then(res => res.json())
        .then(data => setUpazilas(data))
    }, []);

    // Load Union
  useEffect(() => {
    fetch(`https://polling-station-management-server.vercel.app/loadUnion/${selectedUpazila}`)
      .then(res => res.json())
      .then(data => setUnions(data));
  }, [selectedUpazila]);

    // Load by selected Upazila items (all or filtered)
      useEffect(() => {
        let url = "https://polling-station-management-server.vercel.app/pollingStations";
        if (selectedUpazila) {
          url += `/pollingStation/upazila/${selectedUpazila}`;
        }
        fetch(url)
          .then(res => res.json())
          .then(data => setPollingStations(data));
      }, [selectedUpazila]);
    

  // Load Union
  // useEffect(() => {
  //   fetch("https://polling-station-management-server.vercel.app/unions")
  //     .then(res => res.json())
  //     .then(data => setUnions(data));
  // }, []);

  // Load by selected Union items (filtered)
  useEffect(() => {
    let url = "https://polling-station-management-server.vercel.app/pollingStations";
    if (selectedUnion) {
      url += `/pollingStation/union/${selectedUnion}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setPollingStations(data));
  }, [selectedUnion]);

  // Modal section 
  const openModalWithData = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null); // Optional: clear data when closing
  };

  return (
    <div>
       <div className="w-full px-2 my-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
                <div className='flex justify-center items-center max-w-xs'>
                    <select
                      value={selectedDistrict}
                      disabled={true}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                    {/* <option value=""> জেলা নির্বাচন করুন </option> */}
                    {districts.map(dist => (
                    <option key={dist._id} value={dist._id}>
                    {dist.districtName}
                    </option>
                    ))}
                  </select>
                </div>
            </div>

            <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
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
                                   
            <div className="form-control w-full max-w-xs border p-2 border-indigo-400">
              <div className='flex justify-center items-center max-w-xs'>
                  <select
                    value={selectedUnion}
                    onChange={(e) => setSelectedUnion(e.target.value)}
                  >
                    <option value=""> ইউনিয়ন নির্বাচন করুন </option>
                      {unions.map(union => (
                    <option key={union._id} value={union._id}>
                      {union.unionName}
                    </option>
                    ))}
                  </select>
                </div>
            </div>
        </div>

      {/* Data Display */}
      {/* <ul> */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 my-5">
        {pollingStations.map(pollingStation => (
          <li key={pollingStation._id}>
            <div className="card transition duration-300 ease-in-out hover:scale-110">
              <div className="bg-card-body items-center text-white rounded">
                <div className="card-body text-left font-bold p-2">
                  <p> 
                    জেলাঃ {pollingStation.districtName}
                  </p>
                </div>
                <div className="card-body text-left font-bold p-2">
                  <p> 
                    উপজেলাঃ {pollingStation.upazilaName}
                  </p>
                </div> 
                <div className="card-body text-left font-bold p-2">
                  <p> 
                    ইউনিয়নঃ {pollingStation.unionName}
                  </p>
                </div>
                 <div className="card-body text-left font-bold p-2">
                  <p> 
                    ভোটকেন্দ্র নংঃ {pollingStation.pollingStationNo}
                  </p>
                </div>
                <div className="card-body text-left font-bold p-2">
                {/* <p>  {service.description.slice(0, 100)} tittle={service.description}</p> */}
                  <p> 
                    ভোটকেন্দ্রের নামঃ {pollingStation.pollingStationName}
                  </p>
                </div>
                <div className="card-body text-left font-bold p-2">
                  <p> 
                    মোট ভোটার {pollingStation.totalVoter}
                  </p>
                </div>
                <diV>    
                  <button 
                    className="w-2/3 flex items-center justify-center mx-6 my-2 px-8 py-3 
                              border border-transparent text-base font-medium 
                              rounded-md text-white bg-blue-500
                            hover:bg-blue-200 md:py-4 md:text-lg md:px-10" 
                        onClick={() => openModalWithData(pollingStation)}>
                          বিস্তারিত..
                  </button>
                   {/* <Link to={`/pollingStation/${pollingStation._id}`}
                        className="w-2/3 flex items-center justify-center mx-6 my-2 px-8 py-3 
                        border border-transparent text-base font-medium 
                        rounded-md text-white bg-blue-500
                        hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                       >
                        বিস্তারিত..
                        <BsArrowRightSquareFill className="inline ml-3" />  
                        </Link> */}
                </diV>
              </div>    
            </div>
            {/* {pollingStation.pollingStationName} */}
          </li>
          
        ))}
      </div>

         <Modal
              show={isModalOpen}
              onClose={closeModal}
              title={modalData ? `সংসদীয় আসনঃ ${modalData.parliamentarySeat}` : 'Details'}
            >
            {/* Content passed as children to the modal */}
            {modalData ? (
              <div className="overflow-x-auto bg-body">
              <table className="table table-sm">
                {/* head */}
                <thead>
                  <tr className="bg-green-50">                           
                  </tr>
                  <tr className="text-black bg-modal-header">
                    <th>ক্রম</th>
                    <th>তথ্য</th>
                    <th>:</th>
                    <th>বর্ণনা</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-color-prisiding-officer font-bold'>
                    <td>০১</td>
                    <td>প্রিজাইডিং অফিসার</td>
                    <td>:</td>
                    <td>{modalData.prisidingOffcer} - {modalData.mobile} </td>
                  </tr>
                  <tr className= 'text-color-si font-bold'>
                    <td>০২</td>
                    <td>কেন্দ্রের দায়িত্বপ্রাপ্ত এসআই</td>
                    <td>:</td>
                    <td>{modalData.subInspector} - {modalData.siMobile} </td>
                  </tr>
                  <tr>
                    <td>০৩</td>
                    <td>ভোটকেন্দ্র নং</td>
                    <td>:</td>
                    <td>{modalData.pollingStationNo}</td>
                  </tr>
                  <tr>
                    <td>০৪</td>
                    <td>ভোটকেন্দ্রের নাম ও অবস্থান</td>
                    <td>:</td>
                    <td className="text-xs">{modalData.pollingStationName}</td>
                  </tr>
                  <tr>
                    <td>০৫</td>
                    <td>ভোটকক্ষের সংখ্যা</td>
                    <td>:</td>
                    <td>{modalData.numberOfBooth}</td>
                    </tr>
                  <tr>
                    <td>০৬</td>
                    <td>গ্রামের নাম এবং ওয়ার্ড নং</td>
                    <td>:</td>
                    <td className="text-xs">{modalData.wordNoAndVillage}</td>
                  </tr>
                  <tr>
                    <td>০৭</td>
                    <td>ভোটকেন্দ্রের ধরন</td>
                    <td>:</td>
                    <td>{modalData.pollingStationType}</td>
                  </tr>
                  <tr>
                    <td>০৮</td>
                    <td>স্থায়ী বুথ</td>
                    <td>:</td>
                    <td>{modalData.permanentBooth}</td>
                  </tr>
                  <tr>
                    <td>০৯</td>
                    <td>অস্থায়ী বুথ</td>
                    <td>:</td>
                    <td>{modalData.temporaryBooth}</td>
                  </tr>
                  <tr>
                    <td>১০</td>
                    <td>পুরুষ ভোটার</td>
                    <td>:</td>
                    <td>{modalData.male}</td>
                  </tr>
                  <tr>
                    <td>১১</td>
                    <td>মহিলা ভোটার</td>
                    <td>:</td>
                    <td>{modalData.female}</td>
                  </tr>
                  <tr>
                    <td>১২</td>
                    <td>তৃতীয় লিঙ্গ</td>
                    <td>:</td>
                    <td>{modalData.thirdGender}</td>
                  </tr>
                  <tr>
                    <td>১৩</td>
                    <td>মোট ভোটার</td>
                    <td>:</td>
                    <td>{modalData.totalVoter}</td>
                  </tr>
                  {/* <tr>
                    <td>১৪</td>
                    <td>নির্বাচনী এলাকার নম্বর ও নাম</td>
                    <td>:</td>
                    <td>{modalData.parliamentarySeat}</td>
                  </tr> */}
                  <tr>
                    <td>১৪</td>
                    <td>ম্যাপে দেখুন</td>
                    <td>:</td>
                    <td>
                      <a href= {modalData.mapInfo} target="_blank" className="link link-primary"> ক্লিক করুন!</a>
                        {/* <a href='https://maps.app.goo.gl/k1zKNgYQyLL1tMQr5' target="_blank" className="link link-primary"> ক্লিক করুন!</a> */}
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
                 ) : (
                  <p>দুঃখিত! কোন ডেটা পাওয়া যায়নি.</p>
               )}
          </Modal>
      {/* </ul> */}
    </div>
  );
};

export default PollingStation;