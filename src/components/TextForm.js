import React, {useState} from 'react';



export default function TextForm(props) {

  const tOUpperCase = () => {
    let newText = text.toLocaleUpperCase()
    setText(newText)
  }

  const tOLowerCase = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
  }
  
  const tOHandleOnChange = (event) => {
    setText(event.target.value)
  }
  
  const [text, setText] = useState("Put any text to chaneg format");   


  return (
    <div className="mt-5 container text-start">
        <h1 className=''> {props.heading} </h1>
        <textarea className="form-control mt-4" id="exampleFormControlTextarea1" value={text} rows="10" onChange={tOHandleOnChange}></textarea>
        <button className="btn btn-primary mt-4 px-5" onClick={tOUpperCase} > TO UPPER CASE </button>
        <button className="btn btn-primary mt-4 mx-5 px-5" onClick={tOLowerCase} > TO LOWER CASE </button>

        <h2 className='mt-3'>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>

        <h2>Preview</h2>
        <p>{text}</p>


    </div>
  );
}
