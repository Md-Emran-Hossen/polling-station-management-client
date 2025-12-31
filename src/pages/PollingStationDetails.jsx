import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PollingStationDetails = () => {

    const pollingStationDetails = useLoaderData();
    const { pollingStationName, pollingStationLocation, pollingStationType, permanentBooth, temporaryBooth, male, female, thirdGender, totalVoter, parliamentarySeat } = pollingStationDetails;

    return (
        <div>
            <div className="hero w-5/6 mx-auto m-3 p-3 bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div className="text-3xl text-center font-bold text-blue-500 my-2 underline">
                            <h2>ভোটকেন্দ্রের তথ্য</h2>
                        </div>

                        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      {/* <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr> */}
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>০১</th>
        <td className="font-bold text-xl text-blue-500">ভোটকেন্দ্রের নাম</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{pollingStationName}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>০২</th>
        <td className="font-bold text-xl text-blue-500">ভোটকেন্দ্রের ঠিকানা</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{pollingStationLocation}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>০৩</th>
        <td className="font-bold text-xl text-blue-500">ভোটকেন্দ্রের ধরন</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{pollingStationType}</td>
      </tr>
      <tr>
        <th>০৪</th>
        <td className="font-bold text-xl text-blue-500">স্থায়ী বুথ</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{permanentBooth}</td>
      </tr>
      <tr>
        <th>০৫</th>
        <td className="font-bold text-xl text-blue-500">অস্থায়ী বুথ</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{temporaryBooth}</td>
      </tr>
      <tr>
        <th>০৬</th>
        <td className="font-bold text-xl text-blue-500">পুরুষ ভোটার</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{male}</td>
      </tr>
      <tr>
        <th>০৭</th>
        <td className="font-bold text-xl text-blue-500">মহিলা ভোটার</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{female}</td>
      </tr>
      <tr>
        <th>০৮</th>
        <td className="font-bold text-xl text-blue-500">তৃতীয় লিঙ্গ</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{thirdGender}</td>
      </tr>
       <tr>
        <th>০৯</th>
        <td className="font-bold text-xl text-blue-500">মোট ভোটার</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{totalVoter}</td>
      </tr>
       <tr>
        <th>১০</th>
        <td className="font-bold text-xl text-blue-500">সংসদীয় আসন</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">{parliamentarySeat}</td>
      </tr>
       <tr>
        <th>১১</th>
        <td className="font-bold text-xl text-blue-500">ম্যাপে দেখুন</td>
        <td className="font-bold text-2xl text-blue-500">:</td>
        <td className="font-bold text-xl">
              <a href='https://maps.app.goo.gl/k1zKNgYQyLL1tMQr5' target="_blank" className="link link-primary"> ক্লিক করুন!</a>
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