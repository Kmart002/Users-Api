import React, {useState} from 'react'

const Table = ({alldata}) => {
  const [formdata, setdata] = useState("");

  const mySearch = (e) => {};

  
  return (
    <>
    <div className='main'>
          <div className='form'>
            <input 
            type='text'
            className='inner-form'
            placeholder='Search Here...'
            value={formdata}
            />   
          </div>
          <table className='tb'>
            <thead>
              <tr className='headings'>
                  <td>S/N</td>
                  <td>Full Name</td>
                  <td>Phone Number</td>
                  <td>Email Address</td>
                  <td>Street</td>

              </tr>
            </thead>
    
    {alldata.map((data, i)=>{
        <>
      <tbody>
        <tr key={data.id}>
          <td>{i + 1}</td>
          <td>
            {data.name.firstname} {""} {data.name.lastname}
          </td>
          <td>{data.phone}</td>
          <td>{data.email}</td>
          <td>
            {data.address.number} {", "} {data.address.street} {", "} {" "} {data.address.city}
          </td>
        </tr>
      </tbody>
      </>
    })}
    </table>
</div>
    </>
  );
}

export default Table




