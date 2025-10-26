import { useState } from "react";
import { InputLimits, TableParameters } from "./types";
import { NumberInput } from "./NumberInput";
import { MAX_COLUMNS, MAX_ROWS } from "./constants";

export const SetupPanel: React.FC = () => {

    const [params, setParams] = useState<TableParameters>({ m: '', n: '', x: '' });
    const [xLimits, setXLimits] = useState<InputLimits | null>(null);


    
    return(
        <section>
            <h5>
                Enter Table Parameters
            </h5>
            <form>

                <NumberInput 
                    label="Enter M: rows count" 
                    value={params.m} 
                    onChange={(val) => console.log(val)} 
                    min={1}
                    max={MAX_ROWS}
                />
                <NumberInput 
                    label="Enter N: columns count" 
                    value={params.n} 
                    onChange={(val) => console.log(val)} 
                    min={1}
                    max={MAX_COLUMNS}
                />
                {xLimits && (                      
                    <NumberInput 
                        label={`Choose X: must be between ${xLimits.min} and ${xLimits.max}`}
                        value={params.x}
                        onChange={(val) => console.log(val)} 
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
