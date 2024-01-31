import { useState } from "react";

function Form() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const onChangeRef = (ref) => {
    console.log("REF => ", ref);
    return ref && setText(INITIAL_TEXT);
  };

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={onChangeRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}> 보이기/가리기</button>{" "}
    </div>
  );
}

const INITIAL_TEXT = "안녕하세요";

export default Form;
