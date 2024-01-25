
import { useState } from "react";
import { Editor } from "primereact/editor";
import "./EditorCom.scss"

interface EditorProps{
	placeholder?: string
	setValueText?: (text: string) => void
}

const EditorCom = ({placeholder, setValueText}: EditorProps) => {
  const [text, setText] = useState<string | null>('');
  
	const renderHeader = () => {
		return (
			<span className="ql-formats">
				<button className="ql-bold" aria-label="Bold"></button>
				<button className="ql-italic" aria-label="Italic"></button>
				<button className="ql-underline" aria-label="Underline"></button>
				<button className="ql-code-block" aria-label="Insert Code Block"></button>
			</span>
		);
	};

	const Header = renderHeader()

  // const handleOnChange = () => {
    
  // }


  return (
    <div className="EditorCom">
      <Editor
        value={text ? text : ""}
        onTextChange={(e) => {
          setText(e.htmlValue),
            e.htmlValue && setValueText && setValueText(e.htmlValue);
        }}
        style={{ minHeight: "50vh" }}
        headerTemplate={Header}
        placeholder={placeholder}
      />
    </div>
  );

}

export default EditorCom