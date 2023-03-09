import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Register({ show, setShow, setShowLogin }) {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                name='name'
                                type='text'
                                placeholder='FullName'
                                autoFocus
                            // value={name}
                            // onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Email"
                            // autoFocus
                            // value={email}
                            // onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                name="phone"
                                type="text"
                                placeholder="Phone"
                            // value={phone}
                            // onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                            // value={password}
                            // onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Role</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Choose Membership</option>
                                <option
                                    name="basic"
                                // value={user}
                                // onChange={handleChange}
                                >
                                    Basic Member
                                </option>
                                <option
                                    name="silver"
                                // value={partner}
                                // onChange={handleChange}
                                >
                                    Silver Member
                                </option>
                                <option
                                    name="platinum"
                                // value={partner}
                                // onChange={handleChange}
                                >
                                    Platinum Member
                                </option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <input className='input-button bg-primary' type={"submit"} value={"Register"} variant="dark" size="md" onClick={() => {
                                setShow(false);
                                setShowLogin(true);
                            }} />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <p>Don't have an account ? Klik <span className='fw-bold cursor-pointer log-reg'
                        onClick={() => {
                            setShow(false);
                            setShowLogin(true);
                        }}
                    >Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Register;