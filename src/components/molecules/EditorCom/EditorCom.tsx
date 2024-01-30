
import { useState } from "react";
import { Editor } from "primereact/editor";
import "./EditorCom.scss"

interface EditorProps{
	placeholder?: string
  className?: string
	setValueText?: (text: string) => void
  height?: string  
  name?: string 
}

const EditorCom = ({placeholder, setValueText, height = "50vh", className, name}: EditorProps) => {
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

  return (
    <div className="EditorCom">
      <Editor
        className={className}
        name={name}
        value={text ? text : ""}
        onTextChange={(e) => {
          setText(e.htmlValue),
            e.htmlValue && setValueText && setValueText(e.htmlValue);
        }}
        style={{ minHeight: height }}
        headerTemplate={Header}
        placeholder={placeholder}
      />
    </div>
  );

}

export default EditorCom