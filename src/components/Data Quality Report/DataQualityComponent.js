import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
import UploadComponent from './UploadComponent';
import ReportComponent from './ReportComponent';
import HistoryComponent from './HistoryComponent';

export default function DataQualityComponent() {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <Routes>
                <Route path='upload' element={<UploadComponent />} />
                <Route path='' element={<Navigate to='upload' replace />} />
                <Route path='report' element={<ReportComponent />} />
                <Route path='history' element={<HistoryComponent />} />
            </Routes>
        </>
    )
}
