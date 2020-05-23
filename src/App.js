import React from 'react';
import './App.css';

class FantasyBot extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          phoneNumber: ''
      };
  }
  changeHandler = event => {
      this.setState({phoneNumber: event.target.value})
  }
  handleForm = e => {
      e.preventDefault();
      console.log(this.state.phoneNumber)
      this.setState({phoneNumber:''})
  }

  render() {
    return (
     <div className="fantasy">
      <h1 style={{color: "white",fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco", paddingLeft: "25px"}}><b>
      Meet Felix,</b> your personal fantasy football assistant.
      </h1>
      <br/>
      <p style={{color: "white",fontFamily: "Times New Roman", paddingLeft: "25px"}}>
      Using artificial intelligence and data-driven analysis we<br/> 
      bring instant answer to your fantasy football questions to<br/> 
      your mobile phones.$15 for the season(up to 250 quieries).
      </p>
      
      <h7 style={{color: "white",fontFamily: "Times New Roman", paddingLeft: "25px"}}>How it works-></h7>
      <form onSubmit={this.handleForm} style={{paddingLeft: "25px"}}>
      <input type="tel" value={this.state.phoneNumber} placeholder="mobile phone number" onChange={this.changeHandler} style={{borderRadius:"6px"}} required/>
      <button className="myButton">I'm in!</button>
      </form>
    
      </div>
    ) 
  }
}
export default FantasyBot;
