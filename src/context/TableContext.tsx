import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { DataSet, TableParameters } from '../types';
import {
    createNumbersArray,
    createRandomValuesRow,
    getClosestCells,
    loadFromLocalStorage,
    saveToLocalStorage,
} from '../utils';

interface TableContextValue {
    params: TableParameters;
    data: DataSet | null;
    totalRows: number;
    highlightedIds: number[];
    setParams: React.Dispatch<React.SetStateAction<TableParameters>>;
    generateTable: () => void;
    updateCell: (cellId: number) => void;
    addRow: (columnCount: number) => void;
    removeRow: (rowIndex: number) => void;
    setHighlightedCells: (data: DataSet, hoveredId: number, highlightCount: number) => void;
    clearHighlightedCells: () => void;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export const TableProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [params, setParams] = useState<TableParameters>(() =>
        loadFromLocalStorage('tableParams', { m: '', n: '', x: '' }),
    );
    const [data, setData] = useState<DataSet>(() => loadFromLocalStorage('tableData', []));
    const [totalRows, setTotalRows] = useState<number>(() => loadFromLocalStorage('totalRows', 0)); // It is used for ensuring unique ids for cells
    const [highlightedIds, setHighlightedIds] = useState<number[]>([]);

    useEffect(() => saveToLocalStorage('tableParams', params), [params]);
    useEffect(() => saveToLocalStorage('tableData', data), [data]);
    useEffect(() => saveToLocalStorage('totalRows', totalRows), [totalRows]);

    const generateTable = () => {
        if (typeof params.m === 'number' && typeof params.n === 'number') {
            const generated = createNumbersArray(params);
            setTotalRows(params.m);
            setData(generated);
        }
    };

    const updateCell = (cellId: number) => {
        setData((prev) => {
            const newData = [...prev];

            const rowIndex = prev.findIndex((row) => row.some((item) => item.id === cellId));
            const cellIndex = prev[rowIndex].findIndex((item) => item.id === cellId);

            if (rowIndex !== -1 && cellIndex !== -1) {
                const newRow = [...newData[rowIndex]];
                const newCell = newRow[cellIndex];
                newData[rowIndex][cellIndex] = {
                    ...newCell,
                    amount: newCell.amount + 1,
                };
            }

            return newData;
        });
    };

    const addRow = (columnCount: number) => {
        setData((prev) => {
            if (!prev || !columnCount) return prev;

            const newData = [...prev];
            const newRowsCount = totalRows + 1;
            setTotalRows(newRowsCount);

            const newRow = createRandomValuesRow(columnCount, newRowsCount);
            newData.push(newRow);

            return newData;
        });
    };

    const removeRow = (rowIndex: number) => {
        setData((prev) => {
            if (!prev) return prev;
            const newRows = prev.filter((_, i) => i !== rowIndex);
            return newRows;
        });
    };

    const setHighlightedCells = (data: DataSet, hoveredId: number, highlightCount: number) => {
        const cells = data.flat();
        const closestCells = getClosestCells(cells, hoveredId, highlightCount);
        setHighlightedIds(closestCells.map((cell) => cell.id));
    };

    const clearHighlightedCells = () => {
        setHighlightedIds([]);
    };

    return (
        <TableContext.Provider
            value={{
                params,
                data,
                totalRows,
                highlightedIds,
                setParams,
                generateTable,
                updateCell,
                addRow,
                removeRow,
                clearHighlightedCells,
                setHighlightedCells,
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
