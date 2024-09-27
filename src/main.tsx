import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import Login from './components/Login.tsx';
import RefsNPortals from './components/RefsNPortals.tsx';
import ModalDialog from './components/modals/ModalDialog.tsx';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <RefsNPortals />
    {/* <ModalDialog /> */}
  </StrictMode>,
)
