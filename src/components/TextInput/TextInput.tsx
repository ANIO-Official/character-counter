import type { TextInputProps } from "../../type";


export default function TextInput({ onTextChange, placeholder, initialValue }: TextInputProps) {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value
        onTextChange(newValue)
    }


    return (
        <>
            <div>
                <textarea onChange={handleChange} placeholder={placeholder}>{initialValue}</textarea>
            </div>
            <br/>
        </>
    )
}