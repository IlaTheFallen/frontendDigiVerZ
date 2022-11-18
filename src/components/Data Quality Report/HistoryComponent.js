import React, { useState, useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ThingsContext from '../../thingsContext';
const axios = require('axios').default;

export default function HistoryComponent() {

  const { user, dataQualityHistory, setDataQualityHistory } = useContext(ThingsContext)

  useEffect(() => {
    const data = { "id": user._id }
    axios.post('http://localhost:4000/eda-history', data)
      .then(function (response) {
        // handle success
        console.log(response)
        setDataQualityHistory(response.data.history)
        // setAlgorithmAnalyzerReport(response.data.status.analysis)
        // navigate('/algorithm-analyzer/report')
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [])

  useEffect(() => {
    console.log(dataQualityHistory)
  }, [dataQualityHistory])

  return (
    <Container>
      {
        dataQualityHistory ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date and Time</th>
                  <th>Filename</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(dataQualityHistory).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key+1}</td>
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
