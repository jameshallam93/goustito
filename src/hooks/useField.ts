import { ChangeEvent, useState } from "react";


const useField = (type: string) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        type,
        value,
        onChange
    };
};

export { useField };
