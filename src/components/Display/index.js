import React from "react";
import { connect } from "react-redux";
import Markup from "./Markup.jsx";

const mapStateToProps = state => {
  const { list } = state;
  const word = list.current;
  const definition =
    word !== null || word !== undefined ? list.all[list.current] : null;
  return { word, definition };
};

export default connect(
  mapStateToProps,
  {}
)(Markup);
