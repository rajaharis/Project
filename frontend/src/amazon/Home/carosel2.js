import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../../amazon_css/caro.css'

export default function MultipleItem() {


    const setting = {

        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false
    };
    const sett = {

        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false
    };
    const [product, setProduct] = useState([]);

    const fetchProducts = () => {
        fetch('http://localhost:5000/carousel/first')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setProduct(res)
            });

    }
    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <>
            <div className="carousel_first">
                <div className="heading"><h2> Popular Gift In Baby </h2>
                </div>

                <Slider {...setting}>

                    {

                        product.slice(30, 41).map(dta =>

                            <div className="item">
                                <img className="caro_image" src={dta.image} alt="abc" />
                            </div>

                        )
                    }

                </Slider>
            </div>
            <div className="carousel_second">
                <div className="heading"><h2> Everyday essentials you might like </h2>
                </div>

                <Slider {...sett}>

                    {

                        product.slice(41, 52).map(dta =>

                            <div className="item">
                                <img className="caro_image" src={dta.image} alt="abc" />
                            </div>

                        )
                    }

                </Slider>
            </div>
        </>
    )
}