type CellId = number;
type CellValue = number;

export type Cell = {
    id: CellId,
    amount: CellValue
    };

export type DataRow = Cell[];

export type SataSet = DataRow[];
