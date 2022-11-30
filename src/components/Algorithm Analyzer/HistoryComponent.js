import React, { useState, useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ThingsContext from '../../thingsContext';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;

export default function HistoryComponent() {

    const navigate = useNavigate()

    const {user,setAlgorithmAnalyzerReport} = useContext(ThingsContext)

    const [algorithmAnalysisHistory, setAlgorithmAnalysisHistory] = useState([])

    useEffect(() => {
        const data = { "id": user._id }
        axios.post('http://localhost:4000/algorithm-analysis-history', data)
            .then(function (response) {
                // handle success
                console.log(response)
                setAlgorithmAnalysisHistory(response.data.history)
                // setAlgorithmAnalyzerReport(response.data.status.analysis)
                // navigate('/algorithm-analyzer/report')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    const getHistoryData = (value) => {
        console.log(value)
        setAlgorithmAnalyzerReport(value.analysis)
        navigate('/algorithm-analyzer/report')
      }

    return (
        <Container>
            {
                algorithmAnalysisHistory ? (
                    <>
                        <Table striped bordered hover className='mt-3'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date and Time</th>
                                    <th>Filename</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(algorithmAnalysisHistory).map(([key, value]) => (
                                    <tr key={key} onClick={() => { getHistoryData(value) }}>
                                        <td>{parseInt(key) + 1}</td>
                                        <td>{value.datetime}</td>
                                        <td>{value.filename}</td>
                                        <td>{value.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </>
                ) : (<></>)
            }
        </Container>
    )
}
