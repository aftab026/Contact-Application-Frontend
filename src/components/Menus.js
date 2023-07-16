import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action"
                    tage="a" to="/" action="true">
                    Home
                </Link>

                <Link className="list-group-item list-group-item-action"
                    tage="a" to="/create-contact" action="true">
                    Create Contact
                </Link>

                <Link className="list-group-item list-group-item-action"
                    tage="a" to="/view-contacts" action="true">
                    View Contact
                </Link>

                <Link className="list-group-item list-group-item-action"
                    tage="a" to="/update-contact" action="true">
                    Update Contact
                </Link>
            </ListGroup>
        </div>
    )
}

export default Menus;