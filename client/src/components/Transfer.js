import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
const Transfer = ({ mainuser, setModalDisplay, modalDisplay }) => {
    const [user, setUser] = useState({ to: null, amount: "" });

    const history = useHistory();
    let name;
    let value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [data, setData] = useState();
    const getCustomer = async () => {
        try {
            const res = await fetch('/customers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const messageData = await res.json();
            setData(messageData);



        } catch (e) {

            console.log(e);
        }

    }
    useEffect(() => {
        getCustomer()
    }, [])

    const TransferData = async (e) => {
        e.preventDefault();
        const { from, to, amount } = user;

        const res = await fetch('/transfers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    from: mainuser.name, to: to, amount: amount
                })


            }).then((res) => res.json())
            .then((tsdata) => {
                if (tsdata.status === 500) {
                    window.alert('Trafer not successfull');
                }
                else if (amount === 0 || to === null || from === null) {
                    alert('Please fill the all data')
                    history.push('/transfer')
                }
                else if (from === to) {
                    alert('Receiver Name must be diffferent')
                    history.push('/transfer')
                }
                else {
                    window.alert("Transfer Successfull");
                    history.push('/transaction')
                }

            });

            setModalDisplay(false)
    }
    const onModalClose = () => {
        setUser({
            to: null,
            amount: 0,
        })
        setModalDisplay(false)
        history.push('/customer')
    }
    return (
        <>

            <div className={`transfer-form ${modalDisplay ? 'modalShow' : 'modalHide'}`}>
                <ul className="list-group p-3 mx-auto text-center" >
                    <li className="list-group-item text-center " >
                        <div className="row">
                            <div className="col-auto">

                                <div className="formdiv">


                                    <form>
                                        <div className="d-flex justify-content-center align-items-center font-weight-bold  ">
                                            <div className="h2 text-center box text-uppercase" >Transfer</div>
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center"><button className='modalClose' onClick={onModalClose}>
                                            &times;
                                    </button></div>
                                        <div ><h3 className="username">{mainuser?.name}</h3></div>
                                        <p className="useremail">{mainuser?.email}</p>
                                        <div className='modalBalance'>
                                            <p>Balance</p>
                                            <h3>{mainuser?.accountbalance}</h3>
                                        </div>
                                       
                                        <div>
                                            <select className="mt-3" defaultValue='DEFAULT' id="to" name='to' onChange={handleInputs}>
                                                <option value='DEFAULT' disabled>
                                                    - Select a Receiver -
                                        </option>
                                                {data?.map(data => (
                                                    <option id="cust_name" key={data._id} value={user.to}>
                                                        {data.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <input className="mt-4" type="number" name="amount" id="amount" autoComplete="off"
                                                placeholder="Enter Amount"
                                                value={user.amount}
                                                onChange={handleInputs} />
                                        </div>
                                        <button type="submit" id="submit" onClick={TransferData}>Proceed</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul></div>

        </>
    )
}
export default Transfer;