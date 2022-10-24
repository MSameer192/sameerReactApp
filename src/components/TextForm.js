import React, {useState} from 'react';



export default function TextForm(props) {
  
  const [text, setText] = useState("");   
  
  const tOUpperCase = () => {
    let newText = text.toLocaleUpperCase()
    setText(newText)
    props.showAlert('Converted to Upper Case', 'info')
  }

  const tOLowerCase = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert('Converted to Lower Case', 'info')
  }

  const tOClearCase = () => {
    let newText = ""
    setText(newText)
    props.showAlert('Text Cleared', 'info')
  }
  
  const tOHandleOnChange = (event) => {
    setText(event.target.value)
  }

  const toHandleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text copy to ClipBoard!', 'info')
  }
  
  const tOCapitalEachWord = () => {
    
    let NewUpCase = text.split(" ");
    
    const ArrForCapital = NewUpCase;

    for (let i = 0; i < ArrForCapital.length; i++) {
      ArrForCapital[i] = ArrForCapital[i].charAt(0).toUpperCase() + ArrForCapital[i].slice(1)
      
    }

    const UpdatedCase = ArrForCapital.join(" ");
    setText(UpdatedCase);
    props.showAlert('Each word Capitalized', 'info')

  };

  return (
    <div className="mt-5 container text-start" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1 className=''> {props.heading} </h1>
        <textarea className="form-control mt-4" id="exampleFormControlTextarea1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor:props.mode==='dark'? 'grey':'white' }} value={text} rows="10" onChange={tOHandleOnChange}></textarea>
        <button className="btn btn-primary mt-4 px-5" onClick={tOUpperCase} > TO UPPER CASE </button>
        <button className="btn btn-primary mt-4 mx-3 px-5" onClick={tOLowerCase} > TO LOWER CASE </button>
        <button className="btn btn-primary mt-4 mx-3 px-5" onClick={tOCapitalEachWord} > TO CAPITAL EACH FIRST WORD </button>
        <button className="btn btn-primary mt-4 mx-3 px-5" onClick={tOClearCase} > TO CLEAR TEXT </button>
        <button className="btn btn-primary mt-4 mx-3 px-5" onClick={toHandleCopy} > TO COPY TEXT </button>

      <div style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2 className='mt-3'>Text Summary</h2 >
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>

    </div>
  );
}
