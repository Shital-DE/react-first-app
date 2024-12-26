import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }

    const handleLwClick = ()=>{
        setText(text.toLowerCase());
    }

    const handleClearClick = ()=>{
        setText('');
    }

    const handleOnChange = (event)=>{
         setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length}  words, {text.length} characters and {text.split(/[.!?]/).filter(sentence => sentence.trim() !== '').length} sentences.</p>
                <p>{0.008 * text.split(" ").length} minutes read.</p>
                <h2>Preview</h2>
                <p>{ text}</p>
        </div>
            </>
    )
}
