import React, { ReactElement, useCallback, useEffect } from 'react';
import { TableHeader } from './TableHeader';
import { useTableContext } from '../../context';
import { TableRow } from './TableRow';
import { TableFooter } from './TableFooter';

export const Table: React.FC = () => {

    const { params, data, addRow } = useTableContext();

    useEffect(() => {
        console.log('DATA:', data)
    }, [data])

    return (
        <>
        {
            data && data.length > 0 && <table>
                <TableHeader columnCount={params.n} />
                <tbody>
                    {
                        data.map((item, index)=> {
                            return (
                                <TableRow data={item} key={index} index={index} />
                            )                        
                        })
                    }
                </tbody>
                <TableFooter columnCount={params.n}/>
            </table>
        }
        <button onClick={() => addRow(params.n || 0)} className=''>
            Add Row
        </button>
        </>
        
    );
};
