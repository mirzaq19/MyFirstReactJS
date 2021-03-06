import { Component } from 'react';
import Todolist from './ToDoList';
import Clicker from './Clicker';
import Salam from './Salam';
import Timer from './Timer';

class Latihan extends Component {
  render() {
    return (
      <div>
        <Salam name="Budi" age="25" />
        <Salam name="Mirzaq" age="20" />
        <Timer start="0" />
        <Clicker />
        <Todolist />
      </div>
    )
  }
}


export default Latihan;