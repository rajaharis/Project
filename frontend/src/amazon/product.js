import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, CardImg, Col, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import '../amazon_css/product.css'



function Categories() {
    const showproduct = (product) => {
        history.push({
            pathname: '/detail',
            state: {
                product: product,
            }
        })
    }

    const history = useHistory();

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('http://localhost:5000/product/' + history.location.state.id + '')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setProducts(res)
            });
    }
    useEffect(() => {
        fetchProducts()
    }, []);



    return (
        <>

            <h1 className="category_type">{history.location.state.name}</h1>
            <Row className="row1 container-fluid" >
                <center />
                {
                    products.map(p =>
                        <Col xs="4" md="2" className="container" onClick={() => showproduct(p)} >
                            <Card className="products">
                                <img className="prod_img" src={p.image} alt="image" />
                                <div className="prodcuct_detail">
                                    <h4>{p.detail}</h4>
                                    <span>{p.price}</span>
                                </div>
                                <i class="fa fa-star" ></i>
                                <div className="paragraph">
                                    <p >{p.description}</p>
                                </div>
                            </Card></Col>
                    )}

            </Row>
        </>
    )
}
export default Categories;