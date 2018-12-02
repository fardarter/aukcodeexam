import React from "react";

export default function Markup(props) {
  const { list, setWord } = props;
  return (
    <div className="buttons">
      {list &&
        Object.keys(list).map(item => (
          <div>
            <button onClick={() => setWord({ word: item })}>{item}</button>
          </div>
        ))}
    </div>
  );
}
