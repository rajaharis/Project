import React, { useEffect, useState } from 'react'
import Categories from './Home/categories';
import Footer from './Home/footer';
import '../amazon_css/home.css'
function Home(props) {

    return (
        <>
            <div className="slection" xs="12" >
                <img src="item2.jpg" />
            </div>
            <Categories />
            <Footer />

        </>

    )
}

export default Home;
