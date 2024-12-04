import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home(){
    const [x,setX] = useState(10); // x = 10 nhưng x là 1 state
    function changeX(){
        setX(x+1);// x = x + 1;
    }
    return (
        <section>
            <Container>
                <h1>X = {x}</h1>
                <Button onClick={changeX} variant="primary" type="button">Increment</Button>
                <Button  variant="danger" type="button">Decrement</Button>
            </Container>
        </section>
    )
}