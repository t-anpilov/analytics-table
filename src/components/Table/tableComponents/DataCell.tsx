import { useTableContext } from 'context';
import { Cell } from 'types';

interface Props {
    cell: Cell;
}

export const DataCell = ({ cell }: Props) => {
    const { data, params, updateCell, highlightedIds, setHighlightedCells, clearHighlightedCells } =
        useTableContext();

    const isHighlighted = highlightedIds.includes(cell.id);

    const onHoverHandler = () => {
        if (!data || typeof params.x !== 'number') return;
        setHighlightedCells(data, cell.id, params.x);
    };

    return (
        <td
            className={isHighlighted ? 'highlightedCell dataCell' : 'dataCell'}
            onClick={() => updateCell(cell.id)}
            onMouseEnter={onHoverHandler}
            onMouseLeave={clearHighlightedCells}
        >
            {cell.amount}
        </td>
    );
};
