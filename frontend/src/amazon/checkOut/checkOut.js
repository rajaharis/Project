// import e from "connect-flash";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import '../../amazon_css/Checkout.css'
import Stripe_ex from "../stripe_ex";

export default function Checkout() {

    const [newAddress, setnewAddress] = useState("0")
    const [allAdd, setallAdd] = useState([])
    let userinfo = localStorage.getItem("userInfo")
    let userDetail = JSON.parse(userinfo);
    let newAdress;
    let id = userDetail.id
    const Address = () => {
        fetch('http://localhost:5000/UserAddress/' + id + '/' + newAdress + '')
            .then(res => res.json())
            .then(res => {
                setallAdd(res)
            });
    }
    useEffect(() => {
        Address()
    }, []);
    const addNew = () => {
        if (newAddress == 0) {
            setnewAddress("1")

        }
        else {
            setnewAddress("0")
        }

    }
    const handleinput = (e) => {
        newAdress = e;
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:5000/UserAddress/' + id + '/' + newAdress + '')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setallAdd(res)
            });
    }
    console.log(allAdd);
    console.log(userDetail.address);


    return (
        <>
            <div className="logo">
                <div >
                    <img className=" header_logo" src="logo12.png"></img>
                </div>
                <h1>Select a shipping address</h1>

                <h2>Your Default address</h2>

                <div>
                    <div className="all_address">
                        <div className="address_bar"> <label>Full Name:</label>
                            <h2>  {userDetail.name}</h2>
                        </div>
                        <div className="address_bar"><label>Mobile number:</label>
                            <h2>{userDetail.phone}</h2>

                        </div>

                        <div className="used_address">
                            <label>Address:</label>



                            <div className="address">
                                {
                                    userDetail == 0 ? null : <div className="address_input"><input type="checkbox" defaultChecked></input><h4>{userDetail.address}</h4></div>
                                }

                                {
                                    allAdd.map(m =>
                                        <div className="address_input">  <input type="checkbox"></input><h4>{m.address}</h4></div>

                                    )

                                }
                            </div>
                        </div>
                    </div>

                    <Button className="btn btn-success new_Adress " onClick={() => { addNew() }}>Add New Address</Button>
                    <Button className="btn btn-success Use_btn" >Proceed</Button>
                </div>



                {newAddress == 1 ?
                    <form className="address_form" onSubmit={handleSubmit} >
                        <div className="address_bar"><label>Enter Your Address</label>


                            <input placeholder="Street address or P.O" onChange={(e) => { handleinput(e.target.value) }}></input>

                            <Button className="btn btn-success" onClick={handleSubmit}>add</Button>
                        </div>
                        <div className="address_default">
                            {/* <input type="checkbox"></input><label>Make this default address</label> */}
                        </div>
                    </form> : null}
            </div>
        </>
    )
}
export const PaymentMethod = () => {
    function colorFunction() {
        document.getElementById("iiui").style.borderColor = "1px solid red";
    }

    return (
        <>
            <div className="PaymentMethod">
                <h2> Payment Method   </h2>

                <div className="payment_form" >

                    <div className="payment_type">
                        <button className="img" id="iiui" ><img src="../../visa2.png"></img></button>
                        <button className="img"><img id="img" src="../../paypal.png"></img></button>
                        <button className="img"><img id="img" src="../../bitcoin2.png"></img></button>
                    </div>
                    <form>
                        <div className="Card_no">
                            <label>
                                Card number
                            </label>
                            <input required></input>
                        </div>
                        <div className="expiry_cwn">
                            <div className="expiry_date"><label>
                                expiry_date
                            </label>
                                <input required></input>
                            </div>
                            <div className="expiry_date"> <label>
                                Cwn_no
                            </label>
                                <input required></input></div>
                        </div>
                        <div className="Card_no">
                            <label>
                                Card Owner Name
                            </label>
                            <input required></input>
                        </div>
                        <Button className="btn btn-primary payment_btn" type="submit">Create Payment</Button>

                    </form>
                </div>

            </div>
            {/* <Stripe_ex /> */}
        </>
    )

}
