import React, { useEffect, useState } from 'react'
import '../amazon_css/cart.css'
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { useHistory } from 'react-router'

import { removeItem, getCart, clearCart } from './helper';

function Cart() {
    const [Total, setTotal] = useState("")
    let history = useHistory();
    const Checkout = () => {
        let userInfo = localStorage.getItem("userInfo")


        if (userInfo == null) {
            history.push(
                {
                    pathname: "/login"
                }
            )

        }
        else {
            history.push({
                pathname: "/checkout"
            })
        }

    }

    let subtotal = 0;
    getCart().map(m =>
        subtotal = subtotal + (m.quantity * m.price)
    )


    return (
        <>
            <div className="container mainbox">
                <Row>


                    <Col md="9">
                        {
                            getCart().length === 0 ? <Row className=" cart-row">
                                <div className="empty_cart">  <img src="empty.svg">
                                </img><h2 >Your Amazon cart is empty</h2>
                                </div></Row> :
                                <Row className="row">
                                    <h2>Your Amazon Cart</h2>
                                    {getCart().map(m =>
                                        <div className="cart-row" >
                                            <Col md="3"><img className="cart-img" src={m.image} /></Col>

                                            <Col md="8">
                                                <div className="cart-details"><h2>{m.detail}</h2>
                                                    <h3>QTY:{m.quantity}</h3>
                                                    <h3>Price:{m.price}</h3>
                                                    <h3>SubTotal:{(m.quantity * m.price)}</h3>
                                                    <button onClick={(e) => { removeItem(m.id) }}>delete </button>
                                                </div>

                                            </Col>

                                        </div>
                                    )}

                                </Row>

                        }
                        {
                            getCart().length >= 2 ? <button onClick={clearCart} className='clear_cart'>Clear Cart</button> : ''}
                    </Col>
                    {getCart().length == 0 ? '' :
                        <Col md="3">

                            <div className="subtotal">

                                <div >
                                    <h2>Total({getCart().length}): ({subtotal})</h2>

                                    <button style={{ backgroundColor: "rgb(242, 245, 89)" }} onClick={() => { Checkout() }}>Proceed to checkout </button>
                                </div>



                            </div>

                        </Col>
                    }

                </Row>



            </div >


        </>
    )
}

export default Cart
