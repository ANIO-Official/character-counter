import './TextInput.css'
import type { TextInputProps } from "../../type";


export default function TextInput({ onTextChange, placeholder, initialValue }: TextInputProps) {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value
        onTextChange(newValue)
    }


    return (
        <>
            <div className="text-input-container">
                <textarea className="text-input" onChange={handleChange} placeholder={placeholder}>{initialValue}</textarea>
            </div>
            <br/>
        </>
    )
}