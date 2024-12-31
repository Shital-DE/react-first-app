import React, { useState } from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLwClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Text is cleared!", "success")
    }

    const handleOnChange = (event)=>{
         setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is copied!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#173b5f', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{ return element.length !== 0}).length}  words, {text.length} characters and {text.split(/[.!?]/).filter(sentence => sentence.trim() !== '').length} sentences.</p>
                <p>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} minutes read.</p>
                <h2>Preview</h2>
                <p style={{ color:  props.mode === 'light' ? text.length>0? 'black' : 'grey' : 'white' }} >{text.length>0?text:'Nothing to preview.'}</p>
        </div>
            </>
    )
}
