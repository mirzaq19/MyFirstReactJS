import { Component } from "react";
import React from "react";

function List(props){
  return(
    <ul>
      {props.list.map((item,index)=> <li key={index}>{item}</li>)}
    </ul>
  )
}

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kosong:false,
      item: '',
      listItems: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.item!==''){
      this.setState({
        kosong:false,
        listItems:[...this.state.listItems,this.state.item],
        item:''
      })
    }else{
      this.setState({
        kosong:true
      })
    }
  }

  handleChange = (event) =>{
    this.setState({
      item:event.target.value
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.item} onChange={this.handleChange}/>
          <button>Add Item</button>
          <p>{this.state.kosong?'Isi kolom dulu':''}</p>
        </form>
        <List list={this.state.listItems}/>
      </div>
    )
  }
}


export default Todolist;