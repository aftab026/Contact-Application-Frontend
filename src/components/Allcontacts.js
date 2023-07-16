import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllContacts = () => {
  useEffect(() => {
    document.title = "All Contacts || Developed by Aftab";
  }, []);

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getAllContactsFromServer();
  }, []);

  const getAllContactsFromServer = () => {
    axios
      .get(`${base_url}/contacts`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch contacts.");
      });
  };

  const searchContactsByName = () => {
    axios
      .get(`${base_url}/contacts/search/name?name=${searchTerm}`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        setError("Failed to search contacts by name.");
      });
  };

  const searchContactsByPhoneNumbers = () => {
    axios
      .get(`${base_url}/contacts/search/phoneNumbers?phoneNumbers=${searchTerm}`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        setError("Failed to search contacts by phone numbers.");
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      searchContactsByName();
      searchContactsByPhoneNumbers();
    } else {
      getAllContactsFromServer();
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    getAllContactsFromServer();
  };

  const updateContacts = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>All Contacts</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name or phone number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {error && <p>{error}</p>}

      <p>List of contacts:</p>

      {contacts.length > 0 ? (
        contacts.map((item) => <Contact key={item.id} contact={item} update={updateContacts} />)
      ) : (
        <p>No contacts</p>
      )}

      <Link to="/update-contact" className="btn btn-primary">
        Update Contact
      </Link>
    </div>
  );
};

export default AllContacts;
