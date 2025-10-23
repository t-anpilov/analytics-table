import { useCallback } from 'react';
interface Props {
    ColumnCount: number;
};

export const TableHeader = ({ ColumnCount }: Props) => {

    const createHeaderCells = useCallback((n: number) => {
        const cells = [];

        for (let i = 0; i < n; i++) {
            cells.push(
                <th>Cell values N = {i}</th>
            );            
        }

        return cells;
    }, []);

    return(
        <thead>
            <tr> 
                <th></th>          
                {createHeaderCells(ColumnCount)}
                <th>Sum values</th>
            </tr>
        </thead>
    );
};
