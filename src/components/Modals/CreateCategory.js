import React, {useState} from 'react';
import { createCategories } from '../../API/ArticleAPI';
import {Button, Form } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

const CreateCategory = ({show, onHide}) => {

    const [value, setValue] = useState('');

    const addCategory = () => {
        createCategories({name: value}).then(data => 
            {setValue('')
            onHide()});
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-center">
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название категории"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button className="outline-success" onClick={addCategory}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;