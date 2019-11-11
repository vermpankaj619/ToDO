import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
      const {items, clearlist, handleDelete, handleEdit} = this.props
       console.log(items)
    return (
     <ul className='list-group my-5'>
     <h3 className="text-capitalize text-center"> Todo List</h3>
    {
        items.map(item =>{
            return (
   <TodoItem  key={item.id} 
   title={item.title}
   detials={item.detials}
   handleDelete={() => handleDelete(item.id)
}
handleEdit={() => handleEdit(item.id)}
   />
            )
        })
    }
   
      
     <button type='button' className='btn btn-danger' onClick={clearlist}> Clear list</button>
     </ul>
    )
  }
}
