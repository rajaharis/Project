import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../amazon_css/acc.css'

export default function Acc() {
    return (
        <>
            <Container>

                <Row className="Acc_row">
                    <h2>Your Account</h2>
                    <Col md="4"><Card className="Acc_card"><img src="/saveorder.png"></img>
                        <div className="Card_name"><h2>Yours Orders</h2>
                            <span>Track,Return,or Buy Things again</span></div>
                    </Card></Col>
                    <Col md="4"><Card className="Acc_card"><img src="/Log.png"></img>
                        <div className="Card_name">
                            <h2>LogIn & Security</h2>
                            <span>Edit Login,Name Or Mobile</span>
                        </div></Card></Col>
                    <Col md="4"><Card className="Acc_card"><img src="/payment.png"></img>
                        <div className="Card_name">  <h2>Your Payments</h2>
                            <span>Manage Payment Method And Settings </span>
                        </div></Card></Col>
                    <Col md="4"><Card className="Acc_card"><img src="/profile.png"></img>
                        <div className="Card_name"> <h2>Your Profile</h2>
                            <span>Manage , add or remove user profile</span>
                        </div> </Card></Col>
                    <Col md="4"><Card className="Acc_card"><img src="/gift.png"></img>
                        <div className="Card_name"> <h2>Gift Card</h2>
                            <span>View Balnace or reload</span>
                        </div></Card></Col>
                    <Col md="4"><Card className="Acc_card"><img src="/pime.png"></img>
                        <div className="Card_name"> <h2>Prime</h2>
                            <span>View Benifits and Balance</span>
                        </div></Card></Col>
                </Row>
            </Container>
        </>
    )
}