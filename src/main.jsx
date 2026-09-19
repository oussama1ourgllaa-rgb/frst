import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form.jsx'
import Post from './Post.jsx'
import {Salution} from './Salution.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Post />
    </StrictMode>
)


