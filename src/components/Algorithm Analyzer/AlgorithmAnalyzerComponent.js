import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
import ReportComponent from './ReportComponent';
import UploadComponent from './UploadComponent';
import HistoryComponent from './HistoryComponent';

export default function AlgorithmAnalyzerComponent() {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <Routes>
                <Route path="upload" element={<UploadComponent />} />
                <Route path='' element={<Navigate to="upload" replace />} />
                <Route path='report' element={<ReportComponent />} />
                <Route path='history' element={<HistoryComponent/>}/>
            </Routes>
        </>
    )
}
