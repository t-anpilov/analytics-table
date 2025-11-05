import React, { useCallback } from 'react';
import { useTableContext } from 'context';
import { TableHeader } from './tableComponents'
import { TableRow } from './tableComponents';
import { TableFooter } from './tableComponents';
import { RevertButton } from './tableComponents';
import { useNavigate } from 'react-router-dom';
import './table.css'

export const Table: React.FC = () => {

    const { params, data, addRow } = useTableContext();
    const navigate = useNavigate();

    const createNewTable = useCallback(() => navigate('/'), [navigate])

    return (
        <>
            {
                data && data.length > 0 && 
                <div className='tableContainer'>
                    <RevertButton onClickHandler={createNewTable} />
                    <table>
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
                    <button onClick={() => addRow(params.n || 0)} className="addButton">
                        Add Row
                    </button>
                </div>
            }        
        </>
        
    );
};
