import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateCategory from '../Modals/CreateCategory';
import {observer} from 'mobx-react-lite';
import CreateArticle from '../Modals/CreateArticle';

const AdminPanel = observer(() => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [articleVisible, setArticleVisible] = useState(false);


    return (
        <Container className="d-flex flex-column">
            <Button
                
                className="mt-4 p-2"
                onClick={() => setCategoryVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                
                className="mt-4 p-2"
                onClick={() => setArticleVisible(true)}
            >
                Добавить новость
            </Button>

            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateArticle show={articleVisible} onHide={() => setArticleVisible(false)}/>
        </Container>
    );
});

export default AdminPanel;