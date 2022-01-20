
import { React, useEffect, useReducer, useState } from 'react';
import { Card, Row, Col, Modal, CardImg, } from 'reactstrap'
import MultipleItems from './carosel1';
import MultipleItem from './carosel2';
//import Home from './Home'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

import '../../amazon_css/categories.css';

function Categories() {
    const [products, setProducts] = useState([]);

    const history = useHistory();

    const fetchProducts = () => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setProducts(res)
            });
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    var username = localStorage.getItem('Name');


    const showproduct = (id, name) => {
        history.push({
            pathname: '/product',
            state: {
                id: id,
                name: name
            }
        })
    }

    return (

        <>
            <Row className="Cat_row1  " >

                {
                    products.slice(0, 8).map(product =>
                        <Col xs="3" md="3" className='cat_col' onClick={() => showproduct(product.id, product.name)} >
                            <div className='cat_box'>
                                <h2>{product.name}</h2>
                                <div className='cat_img' >
                                    <img src={product.image} alt="abc" />
                                    <button className="see_btn">{product.btn} </button>
                                </div>

                            </div>

                        </Col>
                    )
                }

                <MultipleItems />

                {
                    products.slice(8, 12).map(product =>
                        <Col xs="3" md="3" className='cat_col3' onClick={() => showproduct(product.id, product.name)} >
                            <div className='cat_box'>
                                <h2>{product.name}</h2>
                                <div className='cat_img' >
                                    <img src={product.image} alt="abc" />
                                    <button className="see_btn">{product.btn} </button>

                                </div>
                            </div>

                        </Col>
                    )
                }

                <MultipleItem />
                {
                    products.slice(12, 16).map(product =>
                        <Col xs="3" md="3" className='cat_col4' onClick={() => showproduct(product.id, product.name)} >
                            <div className='cat_box'>
                                <h2>{product.name}</h2>
                                <div className='cat_img' >
                                    <img src={product.image} alt="abc" />
                                    <button className="see_btn">{product.btn} </button>
                                </div>

                            </div>

                        </Col>
                    )
                }
            </Row>


        </>

    )
}
export default Categories;
