import { InputLimits } from "types";

export const calculateXLimits = (m: number, n: number): InputLimits => {

    const calculateMax = () => {
        if ((m * n) <= 4) { 
            return 1;
        }
        if ((m * n) <= 12) { 
            return (m * n) - 2;
        }        
        return Math.ceil((m * n) * 0.9);
    }

    return { min: 1, max: calculateMax() };
}