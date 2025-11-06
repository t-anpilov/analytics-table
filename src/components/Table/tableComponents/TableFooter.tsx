import { useMemo } from 'react';
import { useTableContext } from 'context';
import { calculateColumnPct } from 'utils';
import { PERCENTILE } from 'myConstants';
interface Props {
    columnCount: number | '';
}

export const TableFooter: React.FC<Props> = ({ columnCount }) => {
    const columnNumbers = useMemo(
        () => Array.from(Array(columnCount as number).keys()),
        [columnCount],
    );

    const { data } = useTableContext();

    return (
        <tfoot>
            <tr>
                <td>{PERCENTILE}th percentile</td>
                {data &&
                    columnNumbers.map((num) => {
                        return <td key={'f' + num}>{calculateColumnPct(data, num, PERCENTILE)}</td>;
                    })}
                <td></td>
            </tr>
        </tfoot>
    );
};
