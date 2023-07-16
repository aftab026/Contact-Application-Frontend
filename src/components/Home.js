import React, {useEffect} from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Button} from 'reactstrap';

const Home = () => {
    useEffect(() =>{
        document.title="Home || Developed by Aftab";
    }, []);
  return (
    <div>
      <Card className='text-center'>
        <CardBody>
          <CardTitle tag="h1">Aftab Project</CardTitle>
          <CardText>
            This is developed by Aftab. Backend is on Spring Boot and frontend is on React.js.
          </CardText>
        </CardBody>
        <Container>
            <Button color="primary" outline>Start Using</Button>
        </Container>
      </Card>
    </div>
  );
};

export default Home;
