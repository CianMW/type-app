import { useState, useEffect } from "react";
import { FormGroup, Form, FormControl, Button, Container, Col, Row } from "react-bootstrap"


const MainHome = () => {
const [query, setQuery] = useState(null);
const [data, setData] = useState([]);


const fetchData = async () => {
    if (query){
           const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    } else {
           const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=random`)
        if (response.ok) {
            let data = await response.json()
            console.log("This is the data :", data)
            setData(data)

        }

    }
 
}

useEffect(() => {
    

   fetchData()
}, []);

    return(
        <div >
            <Container>
                <Row className="mt-5 d=flex flex-row-reverse">
                    <Col sm={3}>
              
            <FormGroup className="search-group">
                <Form  className="d-flex">
                  <FormControl
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button
                    onClick={() => console.log("")}
                    variant="outline-info"
                  >
                    Search
                  </Button>
                </Form>
                </FormGroup>
                </Col>
                </Row>
                </Container>

        </div>
    )
}

export default MainHome