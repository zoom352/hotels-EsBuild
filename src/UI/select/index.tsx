import React, { ChangeEventHandler } from 'react';

type Option = {
    label: string;
    value: string | number;
};

type SelectProps = {
    options: Option[],
    defaultValue: string | number,
    // value: string | number | undefined;
    onChange: ChangeEventHandler<HTMLSelectElement>
}

function Select(
    { options, defaultValue, onChange }: SelectProps
) {
    return (
        <select defaultValue={defaultValue} onChange={onChange}>
            <option value={defaultValue}>выберите</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
