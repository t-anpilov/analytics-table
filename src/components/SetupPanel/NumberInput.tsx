import React, { useCallback, useMemo } from 'react';
interface Props {
    label: string;
    value: number | '';
    onChange: (value: number | '') => void;
    min?: number;
    max?: number;
}

export const NumberInput: React.FC<Props> = ({ label, value, onChange, min, max }: Props) => {
    const inputId = useMemo(() => label.replace(/\s+/g, ''), [label]);

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const enteredValue = event.target.value === '' ? '' : Number(event.target.value);
            if (enteredValue === '') {
                onChange('');
                return;
            }

            const value = Number(enteredValue);

            if (Number.isNaN(value) || !Number.isFinite(value)) {
                return;
            }

            if (value >= (min ?? 0) && value <= (max ?? 999)) {
                onChange(value);
            }
        },
        [min, max, onChange],
    );

    return (
        <div className="inputContainer">
            <label htmlFor={inputId}>{label}</label>
            <input
                id={inputId}
                type="number"
                value={value}
                onChange={onChangeHandler}
                min={min}
                max={max}
            />
        </div>
    );
};
