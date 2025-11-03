import { useTableContext } from "../../context";
import { Cell } from "../../types";

interface Props {
    cell: Cell;
};

export const DataCell = ({ cell }: Props) => {

    const { updateCell } = useTableContext();

    return(
        <td
            className=""
            onClick={() => updateCell(cell.id)}
        >
            {cell.amount}
        </td>
    )
};
