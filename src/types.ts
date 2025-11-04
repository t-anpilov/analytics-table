type cellId = number;
type CellValue = number;

export type Cell = {
    id: cellId,
    amount: CellValue
};

export type DataRow = Cell[];

export type DataSet = DataRow[];

export type TableParameters = {
    m: number | '';
    n: number | '';
    x: number | '';
};

export type InputLimits = {
    min: number;
    max: number;
};
