import { useTableContext } from "../../context";
import { DataRow } from "../../types";
import { DataCell } from "./DataCell";

interface Props {
    data: DataRow;
    index: number;
};

export const TableRow = ({ data, index }: Props) => {

    const { removeRow } = useTableContext();

    return(
    <tr>
        <td>
            Cell Value M = {index + 1}
        </td>
        {
            data.map((dataItem) => {
                return (<DataCell key={dataItem.id} cell={dataItem} />)
            })
        }
        <td>
            <span>
                {data.reduce((acc, element) => acc + element.amount, 0)}
            </span>
            <button
                onClick={() => removeRow(index)}
                className=""
            >
                -
            </button>
        </td>
    </tr>
    );
};
