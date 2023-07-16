import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name}) {
    return(
        <div>
            <Card style={{margin: '5px'}} color="warning">
                <CardBody>
                    <h1 className="text-center" style={{margin: '5px'}}>Welcom to Contacts Application</h1>

                </CardBody>
            </Card>
            
        </div>
    )
}

export default Header;