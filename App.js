import React from 'react';
import Table from './components/table';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [tabledata, setTabledata] = useState([
    {
      id:null,
      name: {
        firstname: null,
        lastname: null,
      },
      phone: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
      },
    },
  ]);
  const getTable = async () => {
    try{
      const response = await fetch("http://localhost:4000/api/v2/getAllUsers");
      const data = await response.json();
      setTabledata(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTable();
  }, []);
  console.log(tabledata);
  return (
    <div>
      <Table alldata={tabledata}></Table>
    </div>
  )
}

export default App
