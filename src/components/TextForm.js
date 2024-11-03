import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const countSentences = (Text) => {
        const sentences = Text.split(/\.|!|\?/).filter(sentence => sentence.trim() !== '');
        return sentences.length;
    };
    const [Text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.Mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'light' ? 'white' : 'black',color: props.Mode === 'light' ? 'black' : 'white'}} id="mybox" rows="12"></textarea>
                </div>
                <button className=" btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
                <button className=" btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
            </div>
            <div className="container" style={{ color: props.Mode === 'light' ? 'black' : 'white' }}>
                <h1>your text summary</h1>
                <p>{Text ? Text.split(" ").length : 0} words & {Text.length}characters</p>
                <p>{Text ? `It will take ${0.008 * Text.split(" ").length} minutes to read the whole text` : ''}</p>
                <h2>Preview</h2>
                <p>{countSentences(Text)} sentences</p>
            </div>
        </>
    )
}