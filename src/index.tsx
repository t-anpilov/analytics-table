import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TableProvider } from './context/TableContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    // <React.StrictMode> Disabled for testing
        <TableProvider>
            <App />
        </TableProvider>        
    // </React.StrictMode>
);
