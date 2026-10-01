import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx'

import Counter from './counter.jsx'
import Form from './Form.jsx'
import Post from './Post.jsx'
import {Salution} from './Salution.jsx'
import Users from './Users.jsx'
import TodoList from './TodoList.jsx'
import Books from './Bocs.jsx'
import ValidationForm from './Valid_Form.jsx'
import MovieList from './MovieList.jsx'
import Todo_List from './Todo_List.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Todo_List/>
    </StrictMode>
)


