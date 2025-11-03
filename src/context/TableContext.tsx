import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cell, DataSet, TableParameters } from '../types';
import { createNumbersArray, createRandomValuesRow } from '../utils';

interface TableContextValue {
    params: TableParameters;
    data: DataSet | null;
    setParams: React.Dispatch<React.SetStateAction<TableParameters>>;
    generateTable: () => void;
    updateCell: (cellId: number) => void;
    addRow: (columnCount: number) => void;
    removeRow: (rowIndex: number) => void;
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

    const updateCell = (cellId: number) => {
        setData((prev) => {           

            const rowIndex = prev.findIndex((row) => row.some((item) => item.id === cellId));
            const cellIndex = prev[rowIndex].findIndex((item) => item.id === cellId);
            const newData = [...prev];

            if ((rowIndex !== -1) && (cellIndex !== -1)) {
                const newRow = [...newData[rowIndex]];
                const newCell = newRow[cellIndex];
                newData[rowIndex][cellIndex] = { ...newCell, amount: newCell.amount + 1 };
            }

            return newData;
        });
    };

    const addRow = (columnCount: number) => {
        setData((prev) => {
            if (!prev || !params.n) return prev;

            const newData = [...prev];         
            const newRow = createRandomValuesRow(columnCount, prev.length);
            newData.push(newRow);
            
            return newData;
        });
    };

    const removeRow = (rowIndex: number) => {
        setData(prev => {
            if (!prev) return prev;
            const newRows = prev.filter((_, i) => i !== rowIndex);
            return newRows;
        });
    };

    return (
        <TableContext.Provider
            value={{
                params,
                data,
                setParams,
                generateTable,
                updateCell,
                addRow,
                removeRow,
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
