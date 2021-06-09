import { useState } from "react"

interface CheckboxProps {
    label: string,
    handleCheckboxChange(label: string): void
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({ label, handleCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked)
        handleCheckboxChange(label)
    }
    return (
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                {label}
            </label>
        </div>
    )
}

export { Checkbox }