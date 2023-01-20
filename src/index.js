import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import "./index.css";

function App() {
  const textRef = React.useRef();
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);
  return (
    <>
      <div>
        <h3>Auto</h3>
        <CodeEditor
          value={code}
          ref={textRef}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            fontSize: 12
          }}
        />
      </div>
      <div data-color-mode="light">
        <h3>Light</h3>
        <CodeEditor
          value={code}
          ref={textRef}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            fontSize: 12
          }}
        />
      </div>
      <div data-color-mode="dark">
        <h3>Dark</h3>
        <CodeEditor
          value={code}
          ref={textRef}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            fontSize: 12
          }}
        />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
