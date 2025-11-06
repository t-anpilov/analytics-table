import { Cell } from 'types';

export const getClosestCells = (cells: Cell[], targetId: number, count: number): Cell[] => {
    const target = cells.find((cell) => cell.id === targetId);
    if (!target) return [];

    return cells
        .filter((cell) => cell.id !== targetId)
        .sort((a, b) => Math.abs(a.amount - target.amount) - Math.abs(b.amount - target.amount))
        .slice(0, count);
};
