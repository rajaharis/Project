import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Header from "./header";
import '../amazon_css/detail.css';
import ReactImageMagnify from 'react-image-magnify';
import { updateCart } from "./helper"


function Detail() {
    const createNotification = () => {
        NotificationManager.success('Success', 'Add to cart');
    };
    const history = useHistory();
    const [Qty, setQty] = useState("1")

    const product = history.location.state.product;
    let qty;
    const saveProduct = () => {
        updateCart(product, Qty, "add")
        createNotification()

    }

    return (
        <>
            <Row className="container-fluid row1 " >
                <Col md="3" className="image" >

                    < img src={product.image} />

                </Col>
                <Col md="5" className="detail">
                    <>
                        <h1>{product.detail}</h1>
                        <h3>price:{product.price}</h3>
                        <div >

                            <h2>About this item</h2>
                            <p>{product.about}</p>

                        </div>
                    </>
                </Col>
                <Col md="3">
                    <div className="detail-side">
                        <h2>QTY:</h2>
                        <select className="qty-select" onChange={(e) => { setQty(e.target.value) }}  >
                            <option value={1} >1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                            <option value={5} >5</option>


                        </select>
                    </div>
                    <div className="buttons">

                        <button onClick={saveProduct} style={{ backgroundColor: "orange" }}>
                            Add to Cart
                        </button>
                        <button style={{ backgroundColor: "rgb(242, 245, 89)" }}>Buy Now</button>

                    </div>

                </Col>
                <NotificationContainer />
            </Row>


        </>
    )
}
export default Detail;