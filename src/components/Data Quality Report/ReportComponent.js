import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ThingsContext from '../../thingsContext';

export default function ReportComponent() {

  const { dataQualityReport } = useContext(ThingsContext)
  // const [correlationX,setCorrelationX] = useState([])
  // const [correlationY,setCorrelationY] = useState([])
  // const [correlationData,setCorrelationData] = useState([])
  // const [tempData,setTempData] = useState([])
  const [correlation, setCorrelation] = useState()
  const [spearmanCorrelation, setSpearmanCorrelation] = useState()
  const [missing_values, setMissing_values] = useState()
  const [null_values, setNull_values] = useState()
  // const [describe, setDescribe] = useState()
  const [describeHeader,setDescribeHeader] = useState()
  const [describeValue,setDescribeValue] = useState()
  const [schema, setSchema] = useState()
  // const [summary, setSummary] = useState()
  const [summaryHeader, setSummaryHeader] = useState()
  const [summaryValue, setSummaryValue] = useState()


  useEffect(() => {
    // console.log(dataQualityReport.Correlation)
    setCorrelation(dataQualityReport.Correlation)
    // console.log(dataQualityReport.SpearmanCorrelation)
    setSpearmanCorrelation(dataQualityReport.SpearmanCorrelation)
    // console.log(dataQualityReport.Missing_Values)
    setMissing_values(JSON.parse(dataQualityReport.Missing_Values))
    // setMissing_values(dataQualityReport.Missing_Values)
    // console.log(missing_values)
    setNull_values(JSON.parse(dataQualityReport.Null_Values))
    // setDescribe(JSON.parse(dataQualityReport.Describe))
    // setSchema(JSON.parse(dataQualityReport.Schema))
    setSchema(dataQualityReport.Schema)
    // setSummary(JSON.parse(dataQualityReport.Summary))
    setDescribeHeader(dataQualityReport.DescribeHeader)
    setDescribeValue(dataQualityReport.DescribeValue)
    setSummaryHeader(dataQualityReport.SummaryHeader)
    setSummaryValue(dataQualityReport.SummaryValue)
    // console.log(dataQualityReport)
    // console.log(JSON.parse(dataQualityReport.Correlation))
    // console.log(JSON.parse(dataQualityReport.Describe))
    // console.log(JSON.parse(dataQualityReport.Missing_Values))
    // console.log(JSON.parse(dataQualityReport.Null_Values))
    // console.log(JSON.parse(dataQualityReport.Schema))
    // console.log(JSON.parse(dataQualityReport.Summary))
    // console.log(dataQualityReport.Columns)
    // console.log(dataQualityReport.Shape)
    // const data = JSON.parse(dataQualityReport.Correlation)
    // console.log(data)
    // console.log(typeof(data))
    // data.forEach((value,key)=>{
    //   console.log(key)
    //   console.log(value)
    //   value.forEach((value,key)=>{
    //     console.log(key)
    //     console.log(value)
    //   })
    // })
    // for(const [key,value] of data.entries()){
    //   setCorrelationX([...correlationX,key])
    //   setTempData([])
    //   // console.log(value)
    //   for(const [key,value] of tempData.entries()){
    //     setCorrelationY([...correlationY,key])
    //     setTempData([...tempData,value])
    //   }
    //   setCorrelationData([...correlationData,tempData])
    // }
    // console.log(correlationX)
    // console.log(correlationY)
    // console.log(correlationData)
  }, [dataQualityReport])

  // useEffect(()=>{
  //   console.log(describeValue)
  //   console.log(describeHeader)
  // },[describeValue])

  return (
    <>
      <Container>
        {
          describeValue ? (
            <>
              <h5 className='mt-3'>Describe:</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    {Object.entries(describeHeader).map(([key,value]) => (
                      <th key={key}>{value}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(describeValue).map(([key,value]) => (
                    <tr key={key}>
                      {/* <td>{value}</td> */}
                      {Object.entries(value).map(([key,value]) => (
                        <td key={key}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (<></>)
        }
        {/* {
          summary ? (
            <>
              <h5>Summary:</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    {Object.entries(summary).map(([key, value]) => (
                      <th key={key}>{value["0"]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(summary).map(([key, value]) => (
                    <tr key={key}>
                      <td>{value["1"]}</td>
                      <td>{value["2"]}</td>
                      <td>{value["3"]}</td>
                      <td>{value["4"]}</td>
                      <td>{value["5"]}</td>
                      <td>{value["6"]}</td>
                      <td>{value["7"]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (<></>)
        } */}
        {
          summaryValue ? (
            <>
              <h5 className='mt-3'>Summary:</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    {Object.entries(summaryHeader).map(([key,value]) => (
                      <th key={key}>{value}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                {Object.entries(summaryValue).map(([key,value]) => (
                    <tr key={key}>
                      {Object.entries(value).map(([key,value]) => (
                        <td key={key}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (<></>)
        }
        <img src={`data:image/png;base64,${correlation}`} alt='' />
        <img src={`data:image/png;base64,${spearmanCorrelation}`} alt='' />
        {
          missing_values ? (
            <>
              <h5 className='mt-3'>Missing Values:</h5>
              <Table striped bordered hover responsive>
                <><thead>
                  <tr>
                    {Object.entries(missing_values).map(([key, value]) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead><tbody>
                    <tr>
                      {Object.entries(missing_values).map(([key, value]) => (
                        <td key={key}>{value["0"]}</td>
                        //                   {/* <td>{JSON.parse(value)}</td> */ }
                        //                   {/* {Object.values(JSON.parse(JSON.stringify(value))).map(([data]) => (
                        //   <td>{data}</td>
                        // ))} */}
                      ))}
                    </tr>
                  </tbody></>
              </Table>
            </>
          ) : (<></>)
        }
        {
          null_values ? (
            <>
              <h5 className='mt-3'>Null Values:</h5>
              <Table striped bordered hover responsive>
                <><thead>
                  <tr>
                    {Object.entries(null_values).map(([key, value]) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead><tbody>
                    <tr>
                      {Object.entries(null_values).map(([key, value]) => (
                        <td key={key}>{value["0"]}</td>
                      ))}
                    </tr>
                  </tbody></>
              </Table>
            </>
          ) : (<></>)
        }
      </Container>
    </>
  )
}
