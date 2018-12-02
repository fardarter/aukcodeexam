import React from "react";
import { connect } from "react-redux";
import Markup from "./Markup.jsx";
import { setWord } from "../../redux/modules/list";

const mapStateToProps = state => ({
  list: state.list.all
});

const mapDispatchToProps = dispatch => ({
  setWord: ({ word }) => dispatch(setWord({ word }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
