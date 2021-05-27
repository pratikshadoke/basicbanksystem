import React, { useEffect, useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import Loading from './Loading';
import Transfer from './Transfer';
import '../index.css'
const Customer = () => {

    const [data, setData] = useState();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [btn,btnClick]=useState(false);
    const getCustomer = async () => {
        try {
            const res = await fetch('/customers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((res) => res.json())
                .then((messageData) => {
                    setData(messageData);
                });
            setLoading(true);
        } catch (e) {

            console.log(e);
        }
    }
    useEffect(() => {
        getCustomer()
    }, [])

    return (
        <>
            {loading ? (
                <div className="d-flex align-items-center customer-page ">
                    <ul className="list-group p-3 mx-auto text-center" >
                        <li className="list-group-item text-center" >
                            <div className="row">

                                <div className="col-auto">

                                    <div className="d-flex justify-content-center align-items-center font-weight-bold  ">
                                        <div className="h2 text-center box text-uppercase" >Customers</div>
                                    </div>
                                    <div className="mt-3  d-flex justify-content-center align-items-center ">

                                        <table className="col table " >
                                            <thead>
                                                <tr >

                                                    <th scope="col">Name</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Account No</th>
                                                    <th scope="col">Ifsc No</th>
                                                    <th scope="col">Account Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {data?.map(data => (
                                                    <tr>

                                                        <td data-title="NAME" >{data.name}</td>
                                                        <td data-title="PHONE">{data.phone}</td>
                                                        <td data-title="EMAIL">{data.email}</td>
                                                        <td data-title="ACCOUNT NO" >{data.accountno}</td>
                                                        <td data-title="IFSC NO">{data.ifscno}</td>
                                                        <td data-title="ACCOUNT BALANCE">{data.accountbalance}<span className="sendspan" key={data.name} onClick={() => {
                                                            setModalDisplay(true)
                                                            setUser(data)
                                                            btnClick(true)
                                                        }}><SendIcon className="Sendicon"></SendIcon>Send</span> </td>

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

            ) : (<Loading />)}
            {btn ? (
                <Transfer
                mainuser={user}
                setModalDisplay={setModalDisplay}
                modalDisplay={modalDisplay}
            /> ):("")}
            
        </>
    )
}



export default Customer
