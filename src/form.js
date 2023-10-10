import React,{useState} from "react";
import './css/form.css'

function Form() {
    const [text, setText] = useState('');
  
    return (
      <form>
        <textarea 
          className="text-form"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the JSON code"
        />
      </form>
    );
  }

export default Form;