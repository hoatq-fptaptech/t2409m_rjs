import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../assets/css/forecast.css";
export default function Pricing(){
    const [forecast,setForecast] = useState([]);
    function getData(){
        const url = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
        fetch(url).then(rs=>rs.json())
        .then(rs=>{
            setForecast(rs.list);
        })
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <section>
            <Container>
                <Row>
                    {
                        forecast.map((e,i)=>{
                            return (
                                <Col xs={3}>
                                    <div className="item w-100">
                                        <p className="text-time text-white">{e.dt_txt}</p>
                                        <h2 className="text-white">{e.main.temp}<sup>o</sup>C</h2>
                                        <p className="text-white description">{e.weather[0].description}</p>
                                        <img src={"https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png"}/>
                                    </div>
                                </Col>
                            )
                        })
                    }                
            
                </Row>
            </Container>
        </section>
    )
}