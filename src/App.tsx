import { SetupPanel } from './components/SetupPanel';
import { Table } from './components/Table';

function App() {
    return (
        <>
            <SetupPanel />
            <Table initialData={[]} />
        </>    
  );
}

export default App;
