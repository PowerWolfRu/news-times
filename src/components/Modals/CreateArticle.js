import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { Context } from '../../context';
import { createArticle, getArticles, getCreators } from '../../API/ArticleAPI';


const CreateArticle = observer(({show, onHide}) => {
    const {article} = useContext(Context)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState([])

    useEffect(() => {
        getArticles().then(data => article.setCategories(data))
        getCreators().then(data => article.setCreators(data))
    }, [])

    const addBody = () => {
        setBody([...body, {title: '', body: ''}])
    }
    const changeInfo = (value) => {
        setBody(body.map(i => i.value === value ))
    }

    const addArticle = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('category', article.selectedCategory.id)
        formData.append('creator', article.selectedCreator.id)
        formData.append('body', JSON.stringify(body))
        createArticle(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{article.selectedCategory.name || "Выберите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {article.categories.map(category =>
                                <Dropdown.Item
                                    onClick={() => category.setSelectedCategory(category)}
                                    key={category.id}
                                >
                                    {category.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{article.selectedCreator.fullName || "Выберите автора"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {article.creators.map(creator =>
                                <Dropdown.Item
                                    onClick={() => article.setSelectedCreator(creator)}
                                    key={creator.id}
                                >
                                    {creator.fullName}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок"
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addArticle}
                    >
                        Добавить новость
                    </Button>
                    {body.map(i =>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Form.Control
                                    value={i.body}
                                    onChange={(e) => changeInfo('body', e.target.value)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBody}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateArticle;