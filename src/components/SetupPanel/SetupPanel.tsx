import { useCallback, useEffect, useState } from 'react';
import { NumberInput } from './NumberInput';
import { MAX_COLUMNS, MAX_ROWS } from 'myConstants';
import { InputLimits } from 'types';
import { calculateXLimits } from 'utils';
import { useTableContext } from 'context';
import { useNavigate } from 'react-router-dom';
import './setupPanel.css';

export const SetupPanel: React.FC = () => {
    const { params, setParams, generateTable } = useTableContext();
    const navigate = useNavigate();
    const [xLimits, setXLimits] = useState<InputLimits | null>(null);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            generateTable();
            navigate('/table');
        },
        [generateTable, navigate],
    );

    const setRowsNumber = useCallback(
        (value: number | '') => {
            setParams((prev) => ({ ...prev, m: value, x: '' }));
        },
        [setParams],
    );

    const setColumnsNumber = useCallback(
        (value: number | '') => {
            setParams((prev) => ({ ...prev, n: value, x: '' }));
        },
        [setParams],
    );

    const setXParameter = useCallback(
        (value: number | '') => {
            setParams((prev) => ({ ...prev, x: value }));
        },
        [setParams],
    );

    useEffect(() => {
        if (!params.m || !params.n) {
            setXLimits(null);
        }
        if (params.m && params.n) {
            setXLimits(calculateXLimits(params.m, params.n));
        }
    }, [params]);

    return (
        <section className="panelContainer">
            <h5 className="headerText">Enter Table Parameters</h5>
            <form onSubmit={handleSubmit} className="formContainer">
                <NumberInput
                    label={`Enter M (rows count, up to ${MAX_ROWS}):`}
                    value={params.m}
                    onChange={(val) => setRowsNumber(val)}
                    min={1}
                    max={MAX_ROWS}
                />
                <NumberInput
                    label={`Enter N (columns count, up to ${MAX_COLUMNS}):`}
                    value={params.n}
                    onChange={(val) => setColumnsNumber(val)}
                    min={1}
                    max={MAX_COLUMNS}
                />
                {xLimits && (
                    <NumberInput
                        label={`Choose X (must be between ${xLimits.min} and ${xLimits.max}):`}
                        value={params.x}
                        onChange={(val) => setXParameter(val)}
                        min={xLimits.min}
                        max={xLimits.max}
                    />
                )}
                <button disabled={!params.m || !params.n || !params.x} className="createButton">
                    Generate Table
                </button>
            </form>
        </section>
    );
};
