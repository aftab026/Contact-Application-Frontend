import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = ({ contact, update }) => {
  const deleteContact = (id) => {
    axios
      .delete(`${base_url}/contacts/${id}`)
      .then(
        (response) => {
          toast.success("Contact deleted");
          update(id);
        },
        (error) => {
          toast.error("Failed to delete contact");
        }
      );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-bold">
          <strong>{contact.firstname} {contact.lastname}</strong>
        </CardSubtitle>
        <CardText>Email: {contact.email}</CardText>
        <CardText>
          Phone Numbers: {Array.isArray(contact.phoneNumbers) && contact.phoneNumbers.length > 0 ? contact.phoneNumbers.join(", ") : "N/A"}
        </CardText>
        <Container className="text-center">
          <Button color="danger" onClick={() => deleteContact(contact.id)}>
            Delete
          </Button>
          <Link to={`/update-contact/${contact.id}`} className="btn btn-warning" style={{ marginLeft: "10px" }}>
            Update
          </Link>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Contact;
