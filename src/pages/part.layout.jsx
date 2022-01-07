import React from 'react';
import {Tabs, Tab, Container, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const PartLayout = ({exam, exer}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return(
        <Container className='mt-3 position-relative'>
            <Button className="home-btn rounded-pill" onClick={handleClick}>Về trang chủ</Button>
            <Tabs defaultActiveKey="example" className="mb-3">
                <Tab eventKey="example" title="Lý thuyết">
                    {exam}
                </Tab>
                <Tab eventKey="exercise" title="Luyện tập">
                    {exer}
                </Tab>
            </Tabs>
        </Container>
    )
}