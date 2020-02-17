import React, { Component } from "react";

class Client extends Component {
  render() {
    const { details, onDelete } = this.props;

    return (
      <li className="list-group-item">
        {details.nom}{" "}
        <button className="btn btn-danger" onClick={() => onDelete(details.id)}>
          Supprimer
        </button>
      </li>
    );
  }
}

export default Client;
