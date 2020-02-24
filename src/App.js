import React, { Component } from 'react';
import API from "./utils/api";
import Table from "./components/table";


 class App extends Component{
   state = {
    employees:[],
    numEmp: 20
   }

   componentDidMount = () => {
     API.getEmployee(this.state.numEmp).then(({data}) => {
      this.setState({
        employees: data.results,
      
      });
      //  console.log(this.state.employees)
     });
   }

   render (){
  return (
    <div className="App">
      <Table employees = {this.state.employees}/>
      
    </div>
  )};
}

export default App;
