import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateCategory from '../components/Modals/CreateCategory';
import {observer} from 'mobx-react-lite';
import AdminPanel from '../components/AdminPanel/AdminPanel';

const Admin = () => {
    return (
        <AdminPanel/>
    );
};

export default Admin;