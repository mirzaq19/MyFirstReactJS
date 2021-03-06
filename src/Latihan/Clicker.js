import {Component} from 'react';

class Clicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      number:0,
      toggle:true
    }

    this.handleClick = this.handleClick.bind(this)
    this.tambah = this.tambah.bind(this)
    this.kurang = this.kurang.bind(this)
  }
  tambah(){
    this.setState(state=>({
      number:state.number+1
    }))
  }
  kurang(){
    if(this.state.number-1>=0){
      this.setState(state=>({
        number:state.number-1
      }))
    }
  }

  handleClick(){
    this.setState(state => ({
      toggle:!state.toggle
    }))
  }

  render(){
    return (
      <div>
        <h5>Tombol Hitung</h5>
        <p>Angka : {this.state.number}</p>
        <button onClick={this.tambah}>Tambah</button>
        <button onClick={this.kurang}>Kurang</button>
        <h5>Tombol ON/OFF</h5>
        <button onClick={this.handleClick}>{this.state.toggle?'ON':'OFF'}</button>
      </div>
    )
  }
}

export default Clicker;