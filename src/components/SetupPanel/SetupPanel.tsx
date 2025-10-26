import { useCallback, useEffect, useState } from "react";
import { NumberInput } from "./NumberInput";
import { MAX_COLUMNS, MAX_ROWS } from "./constants";
import { InputLimits, TableParameters } from "../../types";
import { calculateXLimits } from "../../utils";

export const SetupPanel: React.FC = () => {

    const [params, setParams] = useState<TableParameters>({ m: '', n: '', x: '' });
    const [xLimits, setXLimits] = useState<InputLimits | null>(null);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('TBD');
    }, []);

    const setRowsNumber = useCallback((value: number | '') => {
        setParams((p) => ({ ...p, m: value }));
    }, []);

    const setColumnsNumber = useCallback((value: number | '') => {
        setParams((p) => ({ ...p, n: value }));
    }, []);

    const setXParameter = useCallback((value: number | '') => {
        setParams((p) => ({ ...p, x: value }));
    }, []);

    useEffect(() => {
        if(!params.m || !params.n) {
            setXLimits(null);
        }

        if (params.m && params.n) {
            setXLimits(
                calculateXLimits(params.m, params.n)
            );
        }
        
    }, [params]);


    
    return(
        <section>
            <h5>
                Enter Table Parameters
            </h5>
            <form
                onSubmit={handleSubmit}
            >

                <NumberInput 
                    label="Enter M: rows count" 
                    value={params.m} 
                    onChange={(val) => setRowsNumber(val)} 
                    min={1}
                    max={MAX_ROWS}
                />
                <NumberInput 
                    label="Enter N: columns count" 
                    value={params.n} 
                    onChange={(val) => setColumnsNumber(val)} 
                    min={1}
                    max={MAX_COLUMNS}
                />
                {xLimits && (                      
                    <NumberInput 
                        label={`Choose X: must be between ${xLimits.min} and ${xLimits.max}`}
                        value={params.x}
                        onChange={(val) => setXParameter(val)} 
                        min={xLimits.min}
                        max={xLimits.max}
                    />
                )}
                <button
                    disabled={!(params.m && params.n && params.x)}
                >
                    Create Table
                </button>
            </form>
        </section>
    );
};
