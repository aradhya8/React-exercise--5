import React from 'react';
class App extends React.Component{
  render(){
    return(
      <div><center>
       <Button text="WELCOME!!!"/></center>
      </div>
    )   }
}
class Button extends React.Component{
  state={
    textflag:false,
  }
  ToggleButton(){
    this.setState(
      {textflag:!this.state.textflag}
    );
  }
  render(){
    return(
      <div>
        <center><button onClick={()=>this.ToggleButton()}>
          {this.state.textflag===false? "Hide":"Display"}
        </button></center>
        {!this.state.textflag&&this.props.text}
      </div>
    )
  }
}
export default App;