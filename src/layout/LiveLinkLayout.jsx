import React from 'react';
import { Outlet } from 'react-router-dom';
import LiveLink from '../liveLink/LiveLink';

const LiveLinkLayout = () => {
    return (
        <div>
            <LiveLink></LiveLink>
            <Outlet></Outlet>
        </div>
    );
};

export default LiveLinkLayout;