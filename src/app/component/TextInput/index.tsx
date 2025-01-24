"use client"

const TextInput = ({
    // พร็อบ
    labelText, 
    inputId, 
    defaultValue,
    onChange
}:{
    labelText: string; 
    inputId: string; 
    defaultValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div style={{backgroundColor: "Green"}}>
            <label>{labelText}</label>
            <input id={inputId} defaultValue={defaultValue} onChange={onChange}/>
        </div>
    )
}

export default TextInput;
