import { useCallback } from 'react';
interface Props {
    columnCount: number | '';
};

export const TableHeader: React.FC<Props> = ({ columnCount }) => {

    const createHeaderCells = useCallback((n: number) => {
        const cells = [];

        for (let i = 0; i < n; i++) {
            cells.push(
                <th key={'h' + i}>Cell values N = {i + 1}</th>
            );            
        }

        return cells;
    }, []);

    if (typeof columnCount !== 'number') {
        return null
    }

    return(
        <thead>
            <tr> 
                <th></th>          
                {createHeaderCells(columnCount)}
                <th>Sum values</th>
            </tr>
        </thead>
    );
};
