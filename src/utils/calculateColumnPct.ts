import { DataSet } from "types"

export const calculateColumnPct = ( data: DataSet, index: number, pct: number) => {
    if (data.length === 0) {
        return
    };

    let result = NaN

    const values = data
        .map((dataRow) => dataRow[index].amount)
        .sort((a, b) => a - b);

    const position = (pct / 100) * (values.length - 1);
    const lower = Math.floor(position);
    const upper = Math.ceil(position);

    if (lower === upper) {
        result = values[lower];
    } 

    const weight = position - lower;
    result = values[lower] * (1 - weight) + values[upper] * weight; 
    
    if (!isNaN(result)) {
        return Math.round(result * 10) / 10;
    }

    return;
};
