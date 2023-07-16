import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, InputGroup, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const UpdateContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState({});

    useEffect(() => {
        document.title = "Update Contact || Developed by Aftab";
        fetchContact();
    }, []);

    const fetchContact = () => {
        axios.get(`${base_url}/contacts/${id}`).then(
            (response) => {
                const fetchedContact = response.data;
                setContact(fetchedContact);
            },
            (error) => {
                console.log(error);
                toast.error("Failed to fetch contact");
            }
        );
    };

    const handleForm = (e) => {
        e.preventDefault();
        updateContact();
    };

    const updateContact = () => {
        axios.put(`${base_url}/contacts/${id}`, contact).then(
            (response) => {
                console.log(response);
                toast.success("Contact updated successfully");
            },
            (error) => {
                console.log(error);
                toast.error("Failed to update contact");
            }
        );
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-center my-3">Update Contact</h1>
            <Form onSubmit={handleForm}>
            {/* <Fragment> */}
            
                {/* <h1 className="text-center my-3">Fill Contact Details</h1>
                <Form onSubmit={handleForm}> */}
                    <FormGroup>
                        <label htmlFor="id">Contact Id</label>
                        <Input
                            type="int"
                            placeholder="Enter here"
                            name="id"
                            id="id"
                            value={contact.id || ""}
                            onChange={handleChange}
                        />
                    </FormGroup>

                <FormGroup>
                    <label htmlFor="firstname">First Name</label>
                    <Input
                        type="text"
                        placeholder="Enter first name"
                        id="firstname"
                        name="firstname"
                        value={contact.firstname || ""}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="lastname">Last Name</label>
                    <Input
                        type="text"
                        placeholder="Enter last name"
                        id="lastname"
                        name="lastname"
                        value={contact.lastname || ""}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        value={contact.email || ""}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="phoneNumbers">Phone Numbers</label>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Enter phone number"
                            id="phoneNumbers"
                            name="phoneNumbers"
                            value={contact.phoneNumbers || ""}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update Contact
                    </Button>
                </Container>
            </Form>
        </div>
    );
};

export default UpdateContact;
