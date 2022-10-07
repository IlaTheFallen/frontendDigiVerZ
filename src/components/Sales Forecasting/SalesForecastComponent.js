import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
import InputComponent from './InputComponent';
import ReportComponent from './ReportComponent';
import HistoryComponent from './HistoryComponent';

export default function SalesForecastComponent() {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <div>SalesForecastComponent</div>
            <Routes>
                    <Route path='input' element={<InputComponent />} />
                    <Route path='' element={<Navigate to='input' replace />} />
                    <Route path='report' element={<ReportComponent />} />
                    <Route path='history' element={<HistoryComponent />} />
            </Routes>
        </>
    )
}
