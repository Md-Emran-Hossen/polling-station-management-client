import React from 'react';
import { Outlet } from 'react-router-dom';
import LawEnforcement from "../lawEnforcement/LawEnforcement";

const LawEnforcementLayout = () => {
    return (
        <div>
             <LawEnforcement></LawEnforcement>
             <Outlet></Outlet>
        </div>
    );
};

export default LawEnforcementLayout;