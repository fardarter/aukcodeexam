import React from "react";

export default function Markup(props) {
  const { word, definition } = props;
  return (
    <section>
      <h1>{word}</h1>
      <p>{definition}</p>
    </section>
  );
}
