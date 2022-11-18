import React, { useState, useRef, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Typeahead } from 'react-bootstrap-typeahead';
import ThingsContext from '../../thingsContext';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;

export default function UploadComponent() {

  const { setAlgorithmAnalyzerReport } = useContext(ThingsContext)

  const [form, setForm] = useState({})
  const [error, setError] = useState({})

  const fileRef = useRef(null)

  const navigate = useNavigate()

  const setField = (field, value) => {
    console.log(field + ":" + value)
    setForm({ ...form, [field]: value })
    if (!!error) {
      setError({ ...error, [field]: null })
    }
  }

  const validateForm = () => {
    console.log(form)
    // const { file, features, target } = form
    const { file, target } = form
    const newError = {}

    if (!file || file === null)
      newError.file = "Please upload a file"
    if (!target || target === '')
      newError.password = "Please enter target"
    // if (!target || target.length === 0)
    //   newError.target = "Please select target"
    // if (!features || features.length === 0)
    //   newError.features = "Please select features"

    console.log(newError)
    return newError
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formError = validateForm()
    if (Object.keys(formError).length > 0) {
      setError(formError)
      console.log(formError)
    } else {
      console.log(form)
      const formData = new FormData()
      formData.append('file', form.file)
      // formData.append('features', form.features)
      formData.append('target', form.target)
      axios.post('http://localhost:4000/algorithm-analysis', formData)
        .then(function (response) {
          // handle success
          console.log(response)
          setAlgorithmAnalyzerReport(response.data.status.analysis)
          navigate('/algorithm-analyzer/report')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      fileRef.current.value = null
      setForm({})
    }
  }

  return (
    <>
      <Container style={{
        height: "35rem"
      }} className='d-flex align-items-center justify-content-center'>
        <Card style={{
          width: "25rem"
        }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload file for analysis</Form.Label>
                <Form.Control ref={fileRef} type="file"
                  isInvalid={!!error.file}
                  onChange={(e) => setField('file', e.target.files[0])} />
                <Form.Control.Feedback type="invalid">{error.file}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='formTarget' className='mb-3'>
                <Form.Label>Target</Form.Label>
                <Form.Control type="text" placeholder='Target field'
                  value={form.target || ""}
                  isInvalid={!!error.target}
                  onChange={(e) => setField('target', e.target.value)} />
                <Form.Control.Feedback type='invalid'>{error.target}</Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group controlId='formfeatures' className='mb-3'>
                <Form.Label>Features</Form.Label>
                <Typeahead
                  className="is-invalid"
                  id="features"
                  multiple
                  onChange={(selected) => setField('features', selected)}
                  isInvalid={!!error.features}
                  options={["1", "2", "3"]}
                  placeholder="Choose features..."
                  selected={form.features || []}
                />
                <Form.Control.Feedback type="invalid">{error.features}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='formtarget' className='mb-3'>
                <Form.Label>Target</Form.Label>
                <Typeahead
                  className="is-invalid"
                  id="target"
                  onChange={(selected) => setField('target', selected)}
                  isInvalid={!!error.features}
                  options={["1", "2", "3"]}
                  placeholder="Choose Target..."
                  selected={form.target || []}
                />
                <Form.Control.Feedback type="invalid">{error.target}</Form.Control.Feedback>
              </Form.Group> */}
              <div className='text-center'>
                <Button variant="danger" type="submit">
                  Analysis
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
