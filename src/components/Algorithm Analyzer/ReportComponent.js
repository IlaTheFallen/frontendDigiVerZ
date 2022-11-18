import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ThingsContext from '../../thingsContext';

export default function ReportComponent() {


  const { algorithmAnalyzerReport } = useContext(ThingsContext)

  const [compareHeader, setCompareHeader] = useState()
  const [compareValue, setCompareValue] = useState()
  const [residual, setResidual] = useState()
  const [errorPlot, setErrorPlot] = useState()
  const [feature, setFeature] = useState()
  const [interpret, setInterpret] = useState()

  useEffect(() => {
    setCompareHeader(algorithmAnalyzerReport.CompareHeader)
    setCompareValue(algorithmAnalyzerReport.CompareValue)
    setResidual(algorithmAnalyzerReport.Residual)
    setErrorPlot(algorithmAnalyzerReport.Error)
    setFeature(algorithmAnalyzerReport.Feature)
    setInterpret(algorithmAnalyzerReport.Interpret)
  }, [algorithmAnalyzerReport])

  return (
    <>
      <Container>
        {
          compareValue ? (
            <>
              <h5 className='mt-3'>Models:</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    {Object.entries(compareHeader).map(([key, value]) => (
                      <th key={key}>{value}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(compareValue).map(([key, value]) => (
                    <tr key={key}>
                      {Object.entries(value).map(([key, value]) => (
                        <td key={key}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (<></>)
        }
        {
          residual ? (
            <>
              <h5 className='mt-3'>Residual graph: </h5>
              <div className='text-center'>
                <img src={`data:image/png;base64,${residual}`} alt='' />
              </div>
            </>
          ) : (<></>)
        }
        {
          errorPlot ? (
            <>
              <h5 className='mt-3'>Error graph: </h5>
              <img src={`data:image/png;base64,${errorPlot}`} alt='' />
            </>
          ) : (<></>)
        }
        {
          feature ? (
            <>
              <h5 className='mt-3'>Importance of feature graph: </h5>
              <img src={`data:image/png;base64,${feature}`} alt='' />
            </>
          ) : (<></>)
        }
        {
          interpret ? (
            <>
              <h5 className='mt-3'>SHAP graph: </h5>
              <img src={`data:image/png;base64,${interpret}`} alt='' />
            </>
          ) : (<></>)
        }
      </Container>
    </>
  )
}
