type CellId = number;
type CellValue = number;

export type Cell = {
    id: CellId,
    amount: CellValue
    };

export type DataRow = Cell[];

export type SataSet = DataRow[];

export type TableParameters = {
    m: number | '';
    n: number | '';
    x: number | '';
};

export type InputLimits = {
    min: number;
    max: number;
};
