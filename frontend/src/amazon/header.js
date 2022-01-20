import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../amazon_css/new.css'
import { useHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import User from './userModal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function Header(props) {
    const [select, setselect] = useState("9")
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [userOpen, setuserOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }
    const onClick = () => {
        if (userOpen == false) {
            setuserOpen(true)
        }

        else { setuserOpen(false) }


    }


    let history = useHistory();
    let input;
    function handleinput(event) {

        input = (event.target.value);

    }
    function handlesubmit(event) {
        event.preventDefault()
        fetch('http://localhost:5000/search/' + input + '/' + select + '')

            .then(res => res.json())
            .then(res => {
                if (res == []) {
                    alert("Nothing found")
                }
                else {
                    history.push({
                        pathname: "/search",
                        state: {
                            data: res,
                            sear: input
                        }

                    })
                    window.location.reload()
                }
            })
    }
    var userinfo = localStorage.getItem('userInfo');
    var username = JSON.parse(userinfo);


    let value;
    const Selector = (e) => {
        value = e.target.value;
        setselect(value)


    }



    return (
        <>


            <div className="header" lg="12">
                <Navbar collapseOnSelect expand="md" variant="dark"    >

                    <Container>
                        <Navbar.Brand >
                            <img className="header_logo" src="logo3.png" alt="acb" />

                        </Navbar.Brand>


                        <div className="header_nav">

                            <div className="heder_option"><span className="heder_option_line1">deliver to</span>

                                <span onClick={openModal} className="heder_option_line2">
                                    <i class="fas fa-map-marker-alt fa-x" ></i>
                                    pakistan</span>
                            </div></div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <form className="search container" onSubmit={handlesubmit} >
                                <div  >
                                    <select className="cat_select" onChange={(e) => { Selector(e) }}  >

                                        <option value={9} >All products</option>
                                        <option value={1} >Amazon basic</option>
                                        <option value={3}>Electronics</option>
                                        <option value="2">Oculus</option>
                                        <option value="4">Pets</option>
                                        <option value="5">Home Accessories</option>


                                    </select>

                                </div>


                                <input type="search" className="searchInput"
                                    placeholder="Search All Yours Favourite Here" onChange={handleinput}></input>

                                <i class="fa fa-search " onClick={handlesubmit}></i>


                            </form>


                            <div className="header_nav">

                                {username !== null ? <h3 style={{ color: "white" }}>{username.name}
                                    <i style={{ margin: "10px" }} class="fas fa-user "></i>
                                    <span><i onClick={onClick} class="fas fa-sort-down"></i>

                                    </span>{
                                    }
                                </h3> :
                                    <div className="heder_option"><span className="heder_option_line1">Hello guest</span>
                                        <Link to="/signup"> <span className="heder_option_line2" >sing in</span></Link>
                                    </div>

                                }

                                <div className="heder_option"><span className="heder_option_line1">returns</span>
                                    <span className="heder_option_line2">&order</span></div>
                                <div className="heder_option"><span className="heder_option_line1">Your</span>
                                    <span className="heder_option_line2">Prime</span>
                                </div>
                                <Link to="/cart"> <span className="heder_option_line3"><i style={{ margin: "10px" }} class="fas fa-cart-plus fa-lg"></i></span></Link>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


            {userOpen ? <User
            /> : null}




        </>
    )
}

export default Header
