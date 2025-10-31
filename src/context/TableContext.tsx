import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cell, DataRow, DataSet, TableParameters } from '../types';
import { createNumbersArray } from '../utils';

interface TableContextValue {
    params: TableParameters;
    data: DataSet | null;
    setParams: React.Dispatch<React.SetStateAction<TableParameters>>;
    generateTable: () => void;
    updateCell: (cell: Cell) => void;
    // addRow: () => void;
    // removeRow: (rowIndex: number) => void;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export const TableProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [params, setParams] = useState<TableParameters>({ m: '', n: '', x: '' });
    const [data, setData] = useState<DataSet>([]);

    const generateTable = () => {
        if (typeof params.m === 'number' && typeof params.n === 'number') { // Let's think
            const generated = createNumbersArray(params);
            setData(generated);
        }
    };

    // TBD
    const updateCell = (cell: Cell) => {
        setData(prev => prev);
    };

    // const addRow = () => {
    //     setTable(prev => {
    //         if (!prev || prev.rows.length === 0) return prev;
    //         const cols = prev.rows[0].length;
    //         const newRow = Array.from({ length: cols }, () => Math.floor(Math.random() * 100));
    //         return { rows: [...prev.rows, newRow] };
    //     });
    // };

    // const removeRow = (rowIndex: number) => {
    //     setTable(prev => {
    //         if (!prev) return prev;
    //         const newRows = prev.rows.filter((_, i) => i !== rowIndex);
    //         return { rows: newRows };
    //     });
    // };

    return (
        <TableContext.Provider
            value={{
                params,
                data,
                setParams,
                generateTable,
                updateCell,
                // addRow,
                // removeRow,
            }}
        >
            {children}
        </TableContext.Provider>
    );
};

export const useTableContext = (): TableContextValue => {
    const context = useContext(TableContext);
    if (!context) throw new Error('useTableContext must be used with TableProvider');
    return context;
};
