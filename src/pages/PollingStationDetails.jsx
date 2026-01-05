import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PollingStationDetails = () => {

    const pollingStationDetails = useLoaderData();
    const { 
            pollingStationNo, 
            pollingStationName,
            numberOfBooth, 
            wordNoAndVillage, 
            pollingStationType, 
            permanentBooth, 
            temporaryBooth, 
            male, 
            female, 
            thirdGender, 
            totalVoter, 
            parliamentarySeat,
            mapInfo 
          } = pollingStationDetails;

    return (
        <div>
            <div className="hero w-full mx-auto m-3 p-3 bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div className="text-2xl text-center font-bold text-blue-500 my-2 underline">
                            <h2>ভোটকেন্দ্রের তথ্য</h2>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="table table-xs">
                            {/* head */}
                            <thead>
                                 <tr className="bg-green-50 font-bold text-xl">
                                {/* <th>ভোটকেন্দ্র নং</th>
                                <th>ভোটকেন্দ্রের নাম ও অবস্থান</th>
                                <th>ভোটকক্ষের সংখ্যা</th>
                                <th>গ্রামের নাম এবং ওয়ার্ড নং</th> 
                                <th>ভোটকেন্দ্রের ধরন</th>   
                                <th>স্থায়ী বুথ</th>
                                <th>অস্থায়ী বুথ</th>
                                <th>পুরুষ ভোটার</th>
                                <th>মহিলা ভোটার</th>
                                <th>তৃতীয় লিঙ্গ</th>
                                <th>মোট ভোটার</th>
                                <th>সংসদীয় আসন</th>
                                <th>ম্যাপে দেখুন</th> */}
                            </tr>
                              <tr className="text-black font-bold md:text-xl">
                                <th>ক্রম</th>
                                <th>তথ্য</th>
                                <th>:</th>
                                <th>বর্ণনা</th>
                              </tr>
                            </thead>
                            <tbody>
                              
                                    {/* <td>{pollingStationNo}</td>
                                    <td>{pollingStationName}</td>
                                    <td>{numberOfBooth}</td>
                                    <td>{wordNoAndVillage}</td>
                                    <td>{pollingStationType}</td>
                                    <td>{permanentBooth}</td>
                                    <td>{temporaryBooth}</td>
                                    <td>{male}</td>
                                    <td>{female}</td>
                                    <td>{thirdGender}</td>
                                    <td>{totalVoter}</td>
                                    <td>{parliamentarySeat}</td>
                                     <td>{mapInfo}</td> */}
                              <tr className="font-bold md:text-xl">
                                <th>০১</th>
                                <td>ভোটকেন্দ্র নং</td>
                                <td>:</td>
                                <td>{pollingStationNo}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০২</th>
                                <td>ভোটকেন্দ্রের নাম ও অবস্থান</td>
                                <td>:</td>
                                <td>{pollingStationName}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৩</th>
                                <td>ভোটকক্ষের সংখ্যা</td>
                                <td>:</td>
                                <td>{numberOfBooth}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৪</th>
                                <td>গ্রামের নাম এবং ওয়ার্ড নং</td>
                                <td>:</td>
                                <td>{wordNoAndVillage}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৫</th>
                                <td>ভোটকেন্দ্রের ধরন</td>
                                <td>:</td>
                                <td>{pollingStationType}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৬</th>
                                <td>স্থায়ী বুথ</td>
                                <td>:</td>
                                <td>{permanentBooth}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৭</th>
                                <td>অস্থায়ী বুথ</td>
                                <td>:</td>
                                <td>{temporaryBooth}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৮</th>
                                <td>পুরুষ ভোটার</td>
                                <td>:</td>
                                <td>{male}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>০৯</th>
                                <td>মহিলা ভোটার</td>
                                <td>:</td>
                                <td>{female}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>১০</th>
                                <td>তৃতীয় লিঙ্গ</td>
                                <td>:</td>
                                <td>{thirdGender}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>১১</th>
                                <td>মোট ভোটার</td>
                                <td>:</td>
                                <td>{totalVoter}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>১২</th>
                                <td>নির্বাচনী এলাকার নম্বর ও নাম</td>
                                <td>:</td>
                                <td>{parliamentarySeat}</td>
                              </tr>
                              <tr className="font-bold md:text-xl">
                                <th>১৩</th>
                                <td>ম্যাপে দেখুন</td>
                                <td>:</td>
                                <td>
                                    <a href= {mapInfo} target="_blank" className="link link-primary"> ক্লিক করুন!</a>
                                      {/* <a href='https://maps.app.goo.gl/k1zKNgYQyLL1tMQr5' target="_blank" className="link link-primary"> ক্লিক করুন!</a> */}
                                 </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>


                        {/* <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">ভোটকেন্দ্রের নাম: </span>
                        {pollingStationName}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">ভোটকেন্দ্রের ঠিকানা: </span>
                        {pollingStationLocation}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">ভোটকেন্দ্রের ধরন: </span>
                        {pollingStationType}
                        </p>

                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500"> স্থায়ী বুথ: </span>
                        {permanentBooth}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">অস্থায়ী বুথ: </span>
                        {temporaryBooth}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">পুরুষ ভোটার: </span>
                        {male}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">মহিলা ভোটার: </span>
                        {female}
                        </p>
                    
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">তৃতীয় লিঙ্গ: </span>
                        {thirdGender}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">মোট ভোটার: </span>
                        {totalVoter}
                        </p>
                        <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">সংসদীয় আসন: </span>
                        {parliamentarySeat}
                        </p>
                         <p className="text-2xl p-2 m-3">
                        <span className="font-bold text-blue-500">ম্যাপে দেখুন: </span>
                         <a href='https://maps.app.goo.gl/k1zKNgYQyLL1tMQr5' target="_blank" className="link link-primary"> ক্লিক করুন!</a>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollingStationDetails;