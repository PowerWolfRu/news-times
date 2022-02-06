import React from 'react';
import {Button, Form, InputGroup, FormControl} from 'react-bootstrap';

const ContactForm = () => { 

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Обратная связь</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Ваше сообщение</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </Form.Group>       
            <Button variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    );
}

export default ContactForm;