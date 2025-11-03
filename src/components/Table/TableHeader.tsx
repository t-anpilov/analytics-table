import { useMemo } from 'react';
interface Props {
    columnCount: number | '';
};

export const TableHeader: React.FC<Props> = ({ columnCount }) => {

    const columnNumbers = useMemo(() => Array.from(Array(columnCount as number).keys()), [columnCount]);

    if (typeof columnCount !== 'number') {
        return null
    }

    return(
        <thead>
            <tr> 
                <th></th>          
                {
                    columnNumbers.map((num) => {
                        return (
                            <th key={'h' + num}>Cell values N = {num + 1}</th>
                        )
                    })
                }
                <th>Sum values</th>
            </tr>
        </thead>
    );
};
