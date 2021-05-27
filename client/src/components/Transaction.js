import React, { useState, useEffect } from 'react'
import Loading from './Loading';


const Transaction = () => {
    const [data,setData]=useState();
    const [loading,setLoading]=useState(false);
    
  const getTransactions=async()=>
  {
    try {
        const res = await fetch('/transactions', { 
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
               }
          
        }).then((res)=> res.json())
         .then((transactions)=>{
          setData(transactions);
         }); 
         setLoading(true); 
        
         
       } catch (e) {
        
        console.log(e);}
      
  }
  useEffect(() => {
    getTransactions()
  
  
  },5000, [])
  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date(date).toLocaleString('en-US', options)
  }
  return (
    <>
   {loading?(
     
    <div className="d-flex align-items-center transaction-page ">
    <ul className="list-group p-3 mx-auto text-center" >
        <li className="list-group-item text-center" >
            <div className="row">
                <div className="col-auto">
                <div className="d-flex justify-content-center align-items-center font-weight-bold  ">
                    <div  className="h2 text-center box text-uppercase" >Transactions</div>
                </div>
                    <div className="mt-3  d-flex justify-content-center align-items-center ">

      
        <table>
          <thead>
            <tr className='transaction'>
              <th className='TFrom'>FROM</th>
              <th className='TTO'>TO</th>
              <th className='TAmount'>AMOUNT</th>
              <th className='TDate'>DATE</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(item => (
              <tr key={item._id} className='transaction'>
                <td className='TFrom'>{item.from.name}</td>
                <td className='TTO'>{item.to.name}</td>
                <td className='TAmount'>{item.amount}</td>
                <td className='TDate'>{formatDate(item.date)}</td>
              </tr>
            ))}
            </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            ):(<Loading/>)}
       
    </>
  )
}

export default Transaction
