import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
      const { item ,handleChange, handleSubmit, editItem, detials} = this.props;
      console.log(item);
      console.log(detials);
    return (

      
        <div className="card" >
       
        <div className="card-body">
        <form onSubmit={handleSubmit}>
  <div className="input-group">

    <input id="email" type="text" className="form-control"
     name="Add todo" placeholder="Add Todo" value={item} 
    onChange={handleChange}/>
    <input id="email" type="text" className="form-control"
     name="Add todo" placeholder="Add Todo detials" value={detials} 
    onChange={handleChange}/>
    <button type="submit" class={editItem?"btn btn-primary":'btn btn-danger'}>{editItem ?'edit item':"add item" }</button>
  </div>
 
</form>
         
      </div>
      </div>
    )
  }
}
