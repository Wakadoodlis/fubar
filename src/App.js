import React, { Component } from "react";
import MainForm from "./components/MainForm";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getItems } from "./actions/itemActions";
import "./App.css";

class App extends Component {
  onSubmit = value => {
    value.preventDefault();
    alert("submitted");
    console.log(value);
    this.props.getItems(value);
  };
  componentDidMount() {
    console.log(this.props.getItems());
  }

  render() {
    return (
      <React.Fragment>
        <div className="App container">
          <h3 className="jumbotron">Redux Form </h3>
          <MainForm onSubmit={this.submit} />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  items: propTypes.object.isRequired,
  getItems: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.callReducer
});

export default connect(
  mapStateToProps,
  { getItems }
)(App);
