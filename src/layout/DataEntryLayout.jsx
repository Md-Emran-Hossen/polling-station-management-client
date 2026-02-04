import React from 'react';
import { Outlet } from 'react-router-dom';
import DataEntry from '../dataEntry/DataEntry';

const DataEntryLayout = () => {
    return (
        <div>
            <DataEntry></DataEntry>
            <Outlet></Outlet> 
        </div>
    );
};

export default DataEntryLayout;