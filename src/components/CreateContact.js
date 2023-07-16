import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Input, InputGroup, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const CreateContact = () => {
  useEffect(() => {
    document.title = "Add Contact || Developed by Aftab";
  }, []);

  const [contact, setContact] = useState({});

  // form handler function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(contact);
    postDatatoServer(contact);
  };

  // creating function to post data on server
  const postDatatoServer = (data) => {
    axios
      .post(`${base_url}/contacts`, data)
      .then((response) => {
        console.log(response);
        console.log("success");
        toast.success("Contact added successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <Fragment>
        <h1 className="text-center my-3">Fill Contact Details</h1>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <label htmlFor="id">Contact Id</label>
            <Input
              type="int"
              placeholder="Enter here"
              name="id"
              id="id"
              onChange={(e) => {
                setContact({ ...contact, id: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="firstname">First Name</label>
            <Input
              type="text"
              placeholder="Enter first name"
              id="firstname"
              onChange={(e) => {
                setContact({ ...contact, firstname: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="lastname">Last Name</label>
            <Input
              type="text"
              placeholder="Enter last name "
              id="lastname"
              onChange={(e) => {
                setContact({ ...contact, lastname: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setContact({ ...contact, email: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phoneNumbers">Phone Number</label>
            <Input
              type="text"
              name="phoneNumbers"
              id="phoneNumbers"
              placeholder="Enter phone number"
              onChange={(e) => {
                setContact({ ...contact, phoneNumbers: e.target.value });
              }}
            />
          </FormGroup>

          <Container className="text-center">
            <Button type="submit" color="success">
              Create Contact
            </Button>
            <Button
              type="reset"
              color="secondary"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setContact({});
              }}
            >
              Clean
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
};

export default CreateContact;
