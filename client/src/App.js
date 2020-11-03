import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    axios
      .get("api/v1/projects")
      .then((response) =>
        this.setState((prevState) => ({ projects: response.data }))
      )
      .catch((error) => console.log(error));
  }

  renderContentBlocks = (content) =>
    content.map((block, i) => <p key={i}>{block}</p>);

  render() {
    return (
      <div key="main">
        {(this.state.projects || []).map((item) => (
          <div key={item["id"]}>
           
              
              
                {item["name"]} 
              
                
                  {item["description"]} 
              
             

            

          </div>
        ))}
      </div>
    );
  }
}

export default App;
