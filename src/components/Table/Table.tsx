import React, { ReactElement, useCallback } from 'react';
import { TableHeader } from './TableHeader';
import { useTableContext } from '../../context';
import { TableRow } from './TableRow';

export const Table: React.FC = () => {

    const { params, data } = useTableContext();

    const parseRows = useCallback(() => {
        const rows: ReactElement[] = [];
        if (data) {
            data.forEach((item, index)=> {
                rows.push(<TableRow data={item} key={index} index={index} />)
            })
        }       

        return rows;

    }, [data]);

    return (
        <>
        {
            data && <table>
                <TableHeader columnCount={params.n} />
                <tbody>{parseRows()}</tbody>
            </table>
        }
        </>
        
    );
};
