import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export const Question = () => {
    return(
        <Container>
            {
                //TODO Them question
            }
            <Row>Question</Row>
            <Button variant='secondary'>Prev</Button>
            <Button variant='light'>Next</Button>
        </Container>
    )
}