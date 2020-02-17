import React, { Component } from "react";

class Form extends Component {
  state = {
    newClient: ""
  };
  handleChange = event => {
    this.setState({ newClient: event.currentTarget.value });
  };

  clickSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.newClient;
    this.props.onClientAdd({ id, nom });
    this.setState({ newClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.clickSubmit}>
        <input
          value={this.state.newClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Ajouter</button>
      </form>
    );
  }
}

export default Form;
