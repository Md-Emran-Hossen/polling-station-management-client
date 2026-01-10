import React from 'react';

const PublicNotice = () => {
    return (
        <div>
            <div className="card bg-base-300 text-primary-content mx-5 my-5">
                <div className="card-body">
                     <div className="card-actions justify-center">
                        <a 
                            href='https://maps.app.goo.gl/ugkJ8npf3PbH9dny5' 
                            target="_blank" 
                            className="link link-primary text-xl"
                        > 
                            ম্যাপ দেখতে ক্লিক করুন!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicNotice;
