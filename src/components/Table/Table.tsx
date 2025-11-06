import React, { useCallback } from 'react';
import { useTableContext } from 'context';
import { TableHeader } from './tableComponents';
import { TableRow } from './tableComponents';
import { TableFooter } from './tableComponents';
import { RevertButton } from './tableComponents';
import { useNavigate } from 'react-router-dom';
import './table.css';
import { AddButton } from './tableComponents/AddButton';

export const Table: React.FC = () => {
    const { params, data, addRow } = useTableContext();
    const navigate = useNavigate();

    const createNewTable = useCallback(() => navigate('/'), [navigate]);

    return (
        <>
            {data && data.length > 0 && (
                <div className="tableContainer">
                    <div className="buttonsContainer">
                        <RevertButton onClickHandler={createNewTable} />
                        <AddButton onClickHandler={addRow} columns={params.n} />
                    </div>
                    <table>
                        <TableHeader columnCount={params.n} />
                        <tbody>
                            {data.map((item, index) => {
                                return <TableRow data={item} key={index} index={index} />;
                            })}
                        </tbody>
                        <TableFooter columnCount={params.n} />
                    </table>
                </div>
            )}
        </>
    );
};
