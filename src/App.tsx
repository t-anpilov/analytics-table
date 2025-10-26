import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SetupPanel } from './components/SetupPanel';
import { Table } from './components/Table';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'} Component={SetupPanel} key={'create'}
                />
                <Route
                    path={'/table'} Component={Table} key={'table'}
                />
            </Routes>  
        </BrowserRouter>  
  );
}

export default App;
