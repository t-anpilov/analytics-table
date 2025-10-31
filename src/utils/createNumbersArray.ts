import { DataRow, DataSet, TableParameters } from "../types";

const getRandomNumber = () => Math.round(Math.random() * 100); 

export const createNumbersArray = (params: TableParameters): DataSet => {
    const m = Number(params.m);
    const n = Number(params.n);
    const x = Number(params.x);
    const result: DataSet = [];    

    if (
        (isFinite(m) && m > 0) &&
        (isFinite(n) && n > 0) &&
        (isFinite(x) && x > 0)
    ) {
        for (let i = 0; i < m; i++) {
            const newRow: DataRow = [];
            const k = i;
            for (let i = 0; i < n; i++) {
                newRow.push({
                    id: (k+1) * 100 + (i + 1), // creates unique number for the current table
                    amount: getRandomNumber(),
                });
            } 
            result.push(newRow);
        }
    }    

    return result;
};
