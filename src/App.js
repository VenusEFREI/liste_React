import React, { Component } from "react";
import "./styles.css";
import Client from "./client";
import Form from "./form";

class App extends Component {
  state = {
    clients: []
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => {
      return client.id === id;
    });
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleAdd = client => {
    const clients = this.state.clients.slice();

    clients.push(client);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul className="list-group">
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <Form onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
