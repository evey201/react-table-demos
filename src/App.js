import React from 'react';
import { useTable } from "react-table";
import './App.css';

function App() {
  
  const data = [
    { firstName: "jane", lastName: "doe", age: 20 },
    { firstName: "john", lastName: "smith", age: 21 }
  ];

  const columns = [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName"
        },
        {
          Header: "Last Name",
          accessor: "lastName"
        }
      ]
    },
    {
      Header: "Other Info",
      columns: [
        {
          Header: "Age",
          accessor: "age"
        }
      ]
    }
  ];

  
  
  
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
