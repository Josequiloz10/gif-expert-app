import React, {useState, ChangeEvent, FormEvent, SetStateAction, Dispatch} from 'react';

export const AddCategory = ({
                                setCategories,
                            }: {
    setCategories: Dispatch<SetStateAction<string[]>>
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(category => [inputValue, ...category]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

