import React from 'react';
import { TableHeader } from './TableHeader';

export const Table: React.FC = () => {

    const initialData: any[] = [];

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
