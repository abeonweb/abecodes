import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import  useToggle from "../hooks/useToggle";
import logo from "../images/abecodes.png";
import {links} from "../data.js"

function Navbar() {

    const { openMenu, handleClick } = useToggle()

    useEffect(() => {
        window.addEventListener("scroll", iScrolled)

        return function () {
            window.removeEventListener("scroll", iScrolled)
        }
    },[])

    function iScrolled() {
        const header = document.querySelector(".header")
        const sharedLayout = document.querySelector("#shared-layout")
        if (window.pageYOffset > (header.clientHeight))
            sharedLayout.classList.add("sticky")
        else
            sharedLayout.classList.remove("sticky")

    }

    const linksList = links.map((data) => {

       if (data.name === "Home" || data.name === "Contact"||data.name === "Portfolio") {
            return (
                <li key={data.id}>
                    <HashLink smooth to={data.link} 
                        className={"nav-link"}
                        onClick={handleClick}
                        >{data.name}
                    </HashLink>
                </li>
            )
        }
        return (
            <li key={data.id}>
                <NavLink to={data.link}
                    className={ "nav-link"}
                    onClick={handleClick}
                >{data.name}
                </NavLink>
            </li>
        )
    })
    return (
        <header className={`header ${openMenu ? "nav-open" : ""}`}>
            <div className="header-content-wrapper">

                <div className="nav-logo" >
                    <img src={logo} className="logo-nav" alt="" />
                </div>

                <div onClick={handleClick} className="menu-icon ">
                    <span className="hamburger"></span>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        {linksList}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Navbar