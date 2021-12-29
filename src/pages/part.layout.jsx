import React from 'react';
import {Tabs, Tab, Container} from 'react-bootstrap';

export const PartLayout = ({exam, exer}) => {

    return(
        <Container className='mt-3'>
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