import "./styles.css";
import React,{Component} from 'react';
export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Api's data Fetching By Using Class Component</h1>
        <h2>In this we are Going to Use <strike><b>Class Component</b></strike> to fetch the data from then Api!</h2>
        <hr />
        <ApiDataFetching />
      </div>
    );
  }
}
class ApiDataFetching extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      items : [],
      isLoaded : false
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
  }
  render(){
    var {items,isLoaded} = this.state;
    if(!isLoaded){
      return (
              <div>
                loading ...
              </div>
      );  
    }
    return (
              <div>
               <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
              </div>
    );
    
  }
}
