import React, { useEffect, useState } from "react";
import '../../amazon_css/footer.css'
import { Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function Footer() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                //   setShowButton(true);
            } else {
                //   setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <>
            <div className="back_top">
                <button onClick={scrollToTop}>back to top</button>
            </div>
            <div className="footr_main">
                <Container>
                    <Row className="footer_row">
                        <Container>
                            <Col xs="12" md="3">
                                <div className="footer_1"><h2> Get to Know Us</h2>
                                    <ul>
                                        <li>Careers</li>
                                        <li>Blog</li>
                                        <li>About Amazon</li>
                                        <li>Investor Relations</li>
                                        <li>Amazon Devices</li>
                                    </ul>


                                </div>
                            </Col>
                            <Col xs="12" md="3">
                                <div className="footer_1">
                                    <ul>
                                        <h2>Make Money with Us</h2>
                                        <li>Sell products on Amazon</li>
                                        <li>Sell on Amazon Business</li>
                                        <li>Sell apps on Amazon</li>
                                        <li>Become an Affiliate</li>
                                        <li>Advertise Your Products</li>
                                        <li>Self-Publish with Us</li>
                                        <li>Host an Amazon Hub</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="12" md="3">
                                <div className="footer_1">
                                    <ul>
                                        <h2> Amazon Payment Products</h2>
                                        <li>Amazon Business Card</li>
                                        <li>Shop with Points</li>
                                        <li>Reload Your Balance</li>
                                        <li>Amazon Currency Converter</li>
                                    </ul>

                                </div>
                            </Col>
                            <Col xs="12" md="3">
                                <div className="footer_1">
                                    <ul>
                                        <h2>Let Us Help You</h2>
                                        <li>Amazon and COVID-19</li>
                                        <li>Your Account</li>
                                        <li>Your Orders</li>
                                        <li>Returns & Replacements</li>
                                        <li>Manage Your Content and Devices</li>
                                        <li>Amazon Assistant</li>
                                        <li>Help</li>

                                    </ul>
                                </div>

                            </Col>

                        </Container>
                    </Row>
                </Container>
            </div>


        </>
    )
}
