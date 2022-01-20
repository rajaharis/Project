import React, { useState } from "react";
import { useHistory } from "react-router";
import { Row, Col, Card } from "reactstrap";
import '../amazon_css/search.css'
import Header from './header';
export default function Search() {
    const history = useHistory();
    console.log(history.location.state.data);
    return (
        <>
            <Header />

            <div className="search_container">
            <h2>we found {history.location.state.data.length} result for  "{history.location.state.sear}"</h2>
                {

                    history.location.state.data.map(p =>
                        <Row className="search_row container" >
                            <Col md="1">
                                <img className="search_img" src={p.image} alt="image" />
                            </Col>
                            <Col md="10">
                                <div className="search_detail">
                                    <h4>{p.detail}</h4>
                                    <span>{p.price}</span>

                                    <i class="fa fa-star" ></i>

                                    <p >{p.description}</p>
                                </div>
                                <button className="order_btn">Add to cart</button>
                                <button className="order_btn"> Buy Now</button>
                            </Col>
                        </Row>
                    )
                }
            </div>
        </>


    )
}
