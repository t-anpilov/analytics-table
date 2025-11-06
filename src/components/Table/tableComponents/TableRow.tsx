import { useCallback, useState } from 'react';
import { DataCell } from './DataCell';
import { PercentCell } from './PercentCell';
import { ActionCell } from './ActionCell';
import { DataRow } from 'types';

interface Props {
    data: DataRow;
    index: number;
}

export const TableRow = ({ data, index }: Props) => {
    const [showPercentage, setShowPercentage] = useState<boolean>(false);
    const valuesSum = data.reduce((acc, item) => acc + item.amount, 0);
    const maxValue = Math.max(...data.map((item) => item.amount));

    const calculatePercent = useCallback(
        (value: number) => {
            return Math.round((value / valuesSum) * 1000) / 10;
        },
        [valuesSum],
    );

    const calculatePercentOfMax = useCallback(
        (value: number) => (maxValue > 0 ? (value / maxValue) * 100 : 0),
        [maxValue],
    );

    return (
        <tr>
            <td>
                <ActionCell index={index} />
            </td>
            {!showPercentage
                ? data.map((dataItem) => {
                      return <DataCell key={dataItem.id} cell={dataItem} />;
                  })
                : data.map((dataItem) => {
                      return (
                          <PercentCell
                              key={dataItem.id}
                              value={calculatePercent(dataItem.amount)}
                              heat={calculatePercentOfMax(dataItem.amount)}
                          />
                      );
                  })}
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
