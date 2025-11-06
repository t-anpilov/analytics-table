import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SetupPanel } from 'components/SetupPanel';
import { Table } from 'components/Table';
import 'styles/index.css';
import 'styles/variables.css';

const base = process.env.PUBLIC_URL || '/';

function App() {
    return (
        <BrowserRouter basename={base}>
            <Routes>
                <Route path={'/'} Component={SetupPanel} key={'create'} />
                <Route path={'/table'} Component={Table} key={'table'} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
