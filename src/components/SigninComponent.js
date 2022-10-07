import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;


export default function SigninComponent() {

    const navigate = useNavigate()

    const [bool, setBool] = useState(true);
    const [formLogin, setFormLogin] = useState({});
    // setFormLogin({...formLogin,['email']:''})
    // setFormLogin({...formLogin,['passord']:''})
    const [errorLogin, setErrorLogin] = useState({});
    const [formRegister, setFormRegister] = useState({});
    // setFormRegister({...formRegister,['email']:''})
    // setFormRegister({...formRegister,['org']:''})
    // setFormRegister({...formRegister,['password']:''})
    // setFormRegister({...formRegister,['repassword']:''})
    const [errorRegister, setErrorRegister] = useState({});

    const setFieldLogin = (field, value) => {
        setFormLogin({ ...formLogin, [field]: value })
        if (!!errorLogin[field]) {
            setErrorLogin({ ...errorLogin, [field]: null })
        }
    }

    const setFieldRegister = (field, value) => {
        setFormRegister({ ...formRegister, [field]: value })
        if (!!errorRegister[field])
            setErrorRegister({ ...errorRegister, [field]: null })
    }

    const validateFormLogin = () => {
        const { email, password } = formLogin
        const newError = {}

        if (!email || email === '')
            newError.email = "Please enter email"
        if (!password || password === '')
            newError.password = "Please enter password"
        
        return newError
    }

    const validateFormRegister = () => {
        const { email, org, password, repassword } = formRegister
        const newError = {}

        if (!email || email === '')
            newError.email = "Please enter email"
        if (!org || org === '')
            newError.org = "Please enter organisation"
        if (!password || password === '')
            newError.password = "Please enter password"
        if (!repassword || repassword === '')
            newError.repassword = "Please retype password"
        else if (password !== repassword)
            newError.repassword = "Password doesn't match"
        
        return newError
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const formError = validateFormLogin()
        if (Object.keys(formError).length > 0) {
            setErrorLogin(formError)
        } else {
            console.log(formLogin)
            // const formData = new FormData()
            // formData.append('email',formLogin.email)
            // formData.append('password',formLogin.password)
            // for (const [key,value] of formData){
            //     console.log(key + ":" + value)
            // }
            axios.get('http://localhost:4000/signin?email='+formLogin.email+'&password='+formLogin.password)
            .then(function (response) {
                // handle success
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
            setFormLogin({})
        }
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        console.log(formRegister)
        const formError = validateFormRegister()
        if (Object.keys(formError).length > 0) {
            setErrorRegister(formError)
        } else {
            console.log(formRegister)
            setFormRegister({})
        }
    }


    return (
        <div>
            <Container className='d-flex align-items-center' style={{
                width: "50rem",
                height: "45rem"
            }}>
                <Row className="justify-content-center">
                    <Col>
                        {
                            bool ? (
                                <Image width={'500rem'} height={'500rem'} src="https://asitive.com/wp-content/uploads/2022/06/istockphoto-1281150061-612x612-1.jpg"
                                    fluid></Image>
                            ) : (
                                <Image width={'500rem'} height={'500rem'} src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?w=360"
                                    fluid></Image>
                            )
                        }
                    </Col>
                    <Col style={{ width: "15rem", height: "20rem" }}>
                        <Row className="mb-3">
                            <ButtonGroup>
                                <Button variant={bool ? "danger" : "light"} onClick={() => setBool(true)}>Login</Button>
                                <Button variant={bool ? "light" : "danger"} onClick={() => setBool(false)}>Register</Button>
                            </ButtonGroup>
                        </Row>
                        <Row>
                            {
                                bool ? (
                                    <Form onSubmit={handleSubmitLogin}>
                                        <Form.Group className="mb-3" controlId="loginEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                value={formLogin.email || ""}
                                                isInvalid={!!errorLogin.email}
                                                onChange={(e) => setFieldLogin('email', e.target.value)} />
                                            <Form.Control.Feedback type="invalid">{errorLogin.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="loginPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password"
                                                value={formLogin.password || ""}
                                                isInvalid={!!errorLogin.password}
                                                onChange={(e) => setFieldLogin('password', e.target.value)} />
                                            <Form.Control.Feedback type='invalid'>{errorLogin.password}</Form.Control.Feedback>
                                        </Form.Group>
                                        <div className='text-center'>
                                            <Button variant="danger" type="submit">
                                                Login
                                            </Button>
                                        </div>
                                    </Form>
                                ) : (
                                    <Form onSubmit={handleSubmitRegister}>
                                        <Form.Group className="mb-3" controlId="signupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                value={formRegister.email || ""}
                                                isValid={!!errorRegister.email}
                                                onChange={(e) => setFieldRegister('email', e.target.value)} />
                                            <Form.Control.Feedback type="invalid">{errorRegister.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="signupOrg">
                                            <Form.Label>Organisation</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Organisation"
                                                value={formRegister.org || ""}
                                                isValid={!!errorRegister.org}
                                                onChange={(e) => setFieldRegister('org', e.target.value)} />
                                            <Form.Control.Feedback type="invalid">{errorRegister.org}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="signupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password"
                                                value={formRegister.password || ""}
                                                isInvalid={!!errorRegister.password}
                                                onChange={(e) => setFieldRegister('password', e.target.value)} />
                                            <Form.Control.Feedback type='invalid'>{errorRegister.password}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="signupRePassword">
                                            <Form.Label>Retype Password</Form.Label>
                                            <Form.Control type="password" placeholder="Retype Password"
                                                value={formRegister.repassword || ""}
                                                isInvalid={!!errorRegister.repassword}
                                                onChange={(e) => setFieldRegister('repassword', e.target.value)} />
                                            <Form.Control.Feedback type='invalid'>{errorRegister.repassword}</Form.Control.Feedback>
                                        </Form.Group>
                                        <div className='text-center'>
                                            <Button variant="danger" type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </Form>
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
