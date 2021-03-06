import {Component} from 'react';

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time:props.start
    }
  }
  componentDidMount(){
    this.addInterval = setInterval(()=>this.increase(),1000)
  }

  increase(){
    this.setState((state,props)=>({
      time:parseInt(state.time)+1
    }))
  }

  render(){
    return(
    <div>Timer : {this.state.time} detik</div>
    )
  }
}

export default Timer;