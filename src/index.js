import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


  
  class Root extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  

    render() {
      return (
        <>
        <Component1></Component1>
        <Component2></Component2>
        <button>search</button>
        </>
      );
    }
    
  }

  class Component1 extends React.Component {
    constructor() {
      super()
      this.state = {
        name: "Component 1"
      }
    }

    render(){
      return(
      <div>{this.state.name}</div>
      );
    }
  }

  class Component2 extends React.Component {
    constructor() {
      super()
      this.state = {
        name: "Component 2"
      }
    }

    render() {
      return(
        <div>{this.state.name}</div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Root />);
  
  