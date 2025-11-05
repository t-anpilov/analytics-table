import { MAX_COLUMNS } from "myConstants";
import { DataRow, DataSet, TableParameters } from "types";

const getRandomNumber = () => Math.round(Math.random() * 100);

export const createRandomValuesRow = (columns: number, index: number) => {
    const newRow: DataRow = [];            
    for (let i = 0; i < columns; i++) {
            newRow.push({
                id: (index + 1) * MAX_COLUMNS + (i + 1), // creates unique number for the current table
                amount: getRandomNumber(),
            });
        }

    return newRow
}

export const createNumbersArray = (params: TableParameters): DataSet => {
    const m = Number(params.m);
    const n = Number(params.n);
    const result: DataSet = [];    

    if (
        (isFinite(m) && m > 0) &&
        (isFinite(n) && n > 0)
    ) {
        for (let i = 0; i < m; i++) {
            result.push(createRandomValuesRow(n, i));
        }
    }    

    return result;
};
