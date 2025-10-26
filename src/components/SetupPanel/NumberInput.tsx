import React, { useCallback, useMemo } from 'react';
interface Props {
    label: string;
    value: number | '';
    onChange: (value: number | '') => void;
    min?: number;
    max?: number;
};

export const NumberInput: React.FC<Props> = ({ 
    label,
    value,
    onChange,
    min,
    max
 }: Props) => {

    const inputId = useMemo(() => label.replace(/\s+/g, ''), []);

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);

        console.log('input:', min, max, value)

        if (value === "" || (value >= (min ?? 0) && value <= (max ?? 999))) {
            onChange(value);
        };        
    }, [min, max, onChange]);

    return(
        <div>
            <label 
                htmlFor={inputId}
            >
                {label}
            </label>
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
