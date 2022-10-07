import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Typeahead } from 'react-bootstrap-typeahead';
const axios = require('axios').default;

export default function UploadComponent() {

  const [formUpload, setFormUpload] = useState({})
  const [error, setError] = useState({})

  const fileRef = useRef(null)

  const setField = (field, value) => {
    setFormUpload({ ...formUpload, [field]: value })
    if (!!error) {
      setError({ ...error, [field]: null })
    }
  }

  const validateForm = () => {
    const { file, metrics } = formUpload
    const newError = {}

    if (!file || file === null)
      newError.file = "Please upload a file"
    if (!metrics || metrics.length === 0) {
      newError.metrics = "Please select metrics"
    }

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
      console.log(formUpload)
      const formData = new FormData()
      formData.append('file',formUpload.file)
      formData.append('metrics',formUpload.metrics)
      axios.post('http://localhost:4000/eda-analysis',formData)
            .then(function (response) {
                // handle success
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
      fileRef.current.value = null
      setFormUpload({})
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
              <Form.Group controlId='formSelect' className='mb-3'>
                <Form.Label>Metrics</Form.Label>
                <Typeahead
                  className="is-invalid"
                  id="select"
                  multiple
                  onChange={(selected) => setField('metrics', selected)}
                  isInvalid={!!error.metrics}
                  options={["1", "2", "3"]}
                  placeholder="Choose metrics..."
                  selected={formUpload.metrics || []}
                />
                <Form.Control.Feedback type="invalid">{error.metrics}</Form.Control.Feedback>
              </Form.Group>
              <div className='text-center'>
                <Button variant="danger" type="submit">
                  Analysis
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      {/* <Container className='d-flex align-items-center' style={{
                width: "25rem",
                height: "40rem"
            }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control ref={fileRef} type="file"
              isInvalid={!!error.file}
              onChange={(e) => setField('file', e.target.files[0])} />
            <Form.Control.Feedback type="invalid">{error.file}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formSelect' className='mb-3'>
            <Form.Label>Metrics</Form.Label>
            <Typeahead
              id="select"
              multiple
              onChange={(selected)=>setField('metrics',selected)}
              isInvalid={!!error.metrics}
              options={["1","2","3"]}
              placeholder="Choose metrics..."
              selected={formUpload.metrics || []}
            />
            <Form.Control.Feedback type="invalid">{error.metrics}{error.file}</Form.Control.Feedback>
          </Form.Group>
          <div className='text-center'>
            <Button variant="danger" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Container> */}
    </>
  )
}
