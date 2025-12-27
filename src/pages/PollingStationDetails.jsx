import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PollingStationDetails = () => {

    const pollingStationDetails = useLoaderData();
    const { pollingStationName, pollingStationLocation, pollingStationType, permanentBooth, temporaryBooth, male, female, thirdGender, totalVoter, parliamentarySeat } = pollingStationDetails;

    return (
        <div>
            <div className="hero w-5/6 mx-auto m-3 p-3 bg-green-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div className="text-3xl text-center font-bold text-blue-500 my-2 underline">
                            <h2>ভোটকেন্দ্রের তথ্য</h2>
                        </div>

                        <p className="text-2xl p-2 m-3">
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
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollingStationDetails;