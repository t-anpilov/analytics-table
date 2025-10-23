import React from 'react';
import { TableHeader } from './TableHeader';
interface Props {
    initialData: number[];
};

export const Table = ({ initialData }: Props) => {

    return (
        <table>
            <TableHeader ColumnCount={initialData.length} />
            <tbody>
                {
                    initialData.map((dataItem) => dataItem)
                }
            </tbody>
        </table>
    );
};
