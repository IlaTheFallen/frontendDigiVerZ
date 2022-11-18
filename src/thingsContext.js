import { createContext, useState, useEffect } from 'react';

const ThingsContext = createContext({})

export const ThingsProvider = ({ children }) => {
    const [auth,setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [dataQualityReport,setDataQualityReport] = useState({})
    const [dataQualityHistory,setDataQualityHistory] = useState([])
    const [algorithmAnalyzerReport, setAlgorithmAnalyzerReport] = useState({})

    return (
        <ThingsContext.Provider value={{
            auth,setAuth,
            dataQualityReport,setDataQualityReport,
            dataQualityHistory,setDataQualityHistory,
            algorithmAnalyzerReport, setAlgorithmAnalyzerReport,
            user,setUser
        }}>
            {children}
        </ThingsContext.Provider >
    )
}

export default ThingsContext;