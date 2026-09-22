import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.jsx'

import Counter from './counter.jsx'
import Form from './Form.jsx'
import Post from './Post.jsx'
import {Salution} from './Salution.jsx'
import Users from './Users.jsx'
import TodoList from './TodoList.jsx'
import Books from './Bocs.jsx'
import ValidationForm from './Valid_Form.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ValidationForm />
    </StrictMode>
)


