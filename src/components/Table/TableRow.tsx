import { DataRow } from "../../types";

interface Props {
    data: DataRow;
    index: number;
};

export const TableRow = ({ data, index }: Props) => {


    return(
    <tr>
        <td>
            Cell Value M = {index + 1}
        </td>
        {
            data.map((dataItem) => <td key={dataItem.id}>{dataItem.amount}</td>)
        }
        <td>

        </td>
    </tr>
    );
};
