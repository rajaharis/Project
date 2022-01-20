import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../amazon_css/style.css'
import { clearCart } from './helper';

const customStyles = {
    content: {
        top: '10%',
        left: '70%',
        right: 'auto',
        bottom: 'auto',

    },

};

export default function User(isOpen, toggle) {
    let subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(true);


    // function closeModal() {
    //     setIsOpen(false);
    // }

    const Logout = () => {
        localStorage.removeItem('userInfo')
        clearCart();
        window.location.reload();
    }

    return (
        <div >
            <Modal
                isOpen={isOpen}
                onRequestClose={toggle}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='main_box'>

                    <ul className='list'>
                        <Link to="/account"> <li>Account</li></Link>
                        <li>Orders</li>
                        <li>Wish list </li>
                        <Link to="/signup"><li>Switch Account</li></Link>
                        <li></li>
                        <Link > <li onClick={Logout}>Sign out</li></Link>
                    </ul>
                </div>
            </Modal>
        </div>
    );
}