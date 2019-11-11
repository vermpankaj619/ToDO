import React, { Component } from 'react'
import TodoInput from '../Todo/TodoInput'
import TodoList from '../Todo/TodoList'

import uuid from 'uuid';

export default class componentName extends Component {
  state ={
    items: [],
    id: uuid(),
    item: '',
    detials:'',
    editItem:false}


    handleChange = e => {
      this.setState({
        item:e.target.value,
        detials:e.target.value
      });
    };
    handleSubmit = e => {
         e.preventDefault();
         
    const newItem = {
      id:this.state.id,
      title:this.state.item,
      detials:this.state.detials,
    }
    /* console.log(newItem) */
    const UpdatedItems = [...this.state.items, newItem]
    localStorage.setItem('token', 'epkfriugyfvbf0ivfjiubh')
    this.setState({
      items:UpdatedItems,
      item:'',
      detials:'',
      id:uuid(),
      editItem: false
    });

  }
 clearlist= () => {
   this.setState ({
     items:[],
   })
 }
 handleDelete= (id) => {
   const filterItems = this.state.items.filter(item => 
    item.id !== id)
    this.setState ({
      items:filterItems
    })
 }
 handleEdit= (id) => {
     
  const filterItems = this.state.items.filter(item => 
    item.id !== id);

    const seletedItem  =  this.state.items.find(item=> item.id===id)
    const seleteddetials  =  this.state.items.find(detials=> detials.id===id)
     console.log(seletedItem);
    this.setState({
      items:filterItems,
      item:seletedItem,
      notes: seleteddetials,
      editItem:true,
      id:id,

    })
}

  render() {

   
    return (
     
      <div>
      
        <h1>Welcome</h1>

        
        <TodoInput  item={this.props.item} detials={this.props.detials}
         handleChange={this.handleChange} 
         handleSubmit={this.handleSubmit}
         editItem={this.state.editItem}/>
        <TodoList items={this.state.items} detials={this.props.detials}  clearlist={this.clearlist} handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}/>.
      </div>
         
      
    )
  }
}
