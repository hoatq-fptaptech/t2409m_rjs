import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Home(){
    const [product,setProduct] = useState({});
    function callApi(){
        const url = "https://dummyjson.com/products/1";
        fetch(url).then(rs => rs.json())
            .then(rs=>{
                setProduct(rs);
            })
    }
    useEffect(()=>{
        callApi();
    },[]);
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={3}>
                    <Card>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}