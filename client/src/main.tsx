import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/layout/App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer position="bottom-right" hideProgressBar theme="light"/>
        <App/>
    </StrictMode>,
)
