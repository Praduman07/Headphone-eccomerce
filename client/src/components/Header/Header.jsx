import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai"; 

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";
import Category from "../Home/Category/Category";
const Header = () => {

    const [scrolled, setScrolled] =useState(false); // state for header appearance while scrolling //
    const [showCart, setShowCart] =useState(false); // state for cart logo in header//
    const [showSearch, setShowSearch] =useState(false); //state for search icon in header//
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
        }
            , []);

            
        return(
            <>  
        <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li>About</li>
                    <a href="#categories" spy={true} smooth={true} duration={500}>
                        <li>Categories</li></a>
                </ul>
                <div className="center" onClick={() => navigate("/")}>LOGO.</div>
                <div className="right">
                 <TbSearch onClick={()=> setShowSearch(true)}/>
                 <AiOutlineHeart />
                 <span className="cart-icon" onClick={()=> setShowCart(true)}>
                    <CgShoppingCart />
                    {!!cartCount && <span>{cartCount}</span>}
                 </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
        </>)
    ;
};

export default Header;
