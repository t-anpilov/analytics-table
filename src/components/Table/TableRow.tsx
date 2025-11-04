import { useCallback, useMemo, useState } from "react";
import { useTableContext } from "../../context";
import { DataRow } from "../../types";
import { DataCell } from "./DataCell";

interface Props {
    data: DataRow;
    index: number;
};

export const TableRow = ({ data, index }: Props) => {

    const { removeRow } = useTableContext();

    const [showPercentage, setShowPercentage] = useState<boolean>(false);
    const valuesSum = data.reduce((acc, item) => acc + item.amount, 0);

    const calculatePercent = useCallback((value: number) => {
        return Math.round( value / valuesSum * 1000 ) / 10 + ' %'
    }, [valuesSum]);

    return(
    <tr>
        <td>
            <p>Cell Value M={index + 1}</p>
            <div className="removeButtonContainer">
                <button
                    onClick={() => removeRow(index)}
                    className="removeButton"
                >
                    Remove Row
                </button>
            </div>
        </td>
        {
            !showPercentage ? (
                data.map((dataItem) => {
                    return (<DataCell key={dataItem.id} cell={dataItem} />)
                })
            ) : (
                data.map((dataItem) => {
                    return (<td key={dataItem.id}>{calculatePercent(dataItem.amount)}</td>)
                })    
            )            
        }

        <td
            className="sumCell"
            onMouseEnter={() => setShowPercentage(true)}
            onMouseLeave={() => setShowPercentage(false)}
        >
            {valuesSum}            
        </td>
    </tr>
    );
};
