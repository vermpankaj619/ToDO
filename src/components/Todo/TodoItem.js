import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
      const { title, handleDelete, handleEdit,detials} = this.props;
    return (
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{detials}</p>
        <a href="#" class="btn btn-primary"  onClick={handleDelete}>Delete</a>
        <a href="#" class="btn btn-dark"  onClick={handleEdit}>Edit</a>
      
      </div>
      </div>
    )
  }
}
