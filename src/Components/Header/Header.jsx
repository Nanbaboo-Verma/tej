import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Book, Home } from "react-feather";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [path, setPath] = useState("/")
    const [width, setWidth] = useState(0);

    // window resize
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setWidth]);
    const headerData = [
        {
            nav: "Home",
            icon: <Home size={20} />
        },
        {
            nav: "Product",
            icon: <Home size={20} />
        },
        {
            nav: "Book",
            icon: <Book size={20} />
        },
        {
            nav: "About",
            icon: <Home size={20} />
        },
    ];
    console.log(path, 'path')
    return (
        <header>
            <div className="alcm__Header--wrapper">
                <div className={`${width < 767 ? "alcm__Mobile-Bar--Icon" : "alcm__Desk--logo"}`}>
                    {width < 767 && <svg className="alcm__Bar--Icon" onClick={() => setShowSideBar(!showSideBar)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>}

                    {showSideBar &&
                        <>
                            <div className="alcm__NabSide--wrapper alcm__NabSide--active">
                                <div className="alcm__NavSide-Mobile--logo">
                                    <span>Logo</span>
                                    <svg onClick={() => setShowSideBar(false)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                                </div>
                                <hr />
                                <ul className="alcm__NavSide-Mobile--wrapper">

                                    <Link id="Home" to="/" >
                                        <li>
                                            <span className="alcm__Desk--icon"><Home size={20} /></span>
                                            <span>Home</span>
                                        </li>

                                    </Link>


                                    <Link id="Home" to="About" >
                                        <li>   <span className="alcm__Desk--icon"><Home size={20} /></span>
                                            <span>About</span></li>

                                    </Link>


                                    <Link id="Home" to="Help" >
                                        <li>  <span className="alcm__Desk--icon"><Home size={20} /></span>
                                            <span>Help</span></li>

                                    </Link>


                                    <Link id="Home" to="Contact" >
                                        <li> <span className="alcm__Desk--icon"><Home size={20} /></span>
                                            <span>Contact</span></li>

                                    </Link>

                                    {/* {headerData.map((items) => {
                                        return <li>
                                            <Link id="home" to="/">
                                                <span className="alcm__Mobil--icon">{items.icon}</span>
                                                <span>{items.nav}</span>
                                            </Link>
                                        </li>
                                    })} */}
                                </ul>
                            </div>
                            <div className="alcm__Bg--dark" onClick={() => setShowSideBar(false)}></div>
                        </>
                    }


                    {width > 767 && <Link className="logo" to="Home">
                        <span>CEDCOSS</span>
                    </Link>
                    }
                </div>


                {/* open */}

                <>
                    {width > 767 ?
                        <ul className="alcm__Nav--wrapper">
                            <li>
                                <Link id="Home" to="/" >
                                    <span className="alcm__Desk--icon"><Home size={20} /></span>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link id="Home" to="About" >
                                    <span className="alcm__Desk--icon"><Home size={20} /></span>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link id="Home" to="Help" >
                                    <span className="alcm__Desk--icon"><Home size={20} /></span>
                                    <span>Help</span>
                                </Link>
                            </li>
                            <li>
                                <Link id="Home" to="Contact" >
                                    <span className="alcm__Desk--icon"><Home size={20} /></span>
                                    <span>Contact</span>
                                </Link>
                            </li>


                            {/* {headerData.map((items) => {
                                return <li onClick={() => setPath(items.nav)}>
                                    <Link id={items.nav} to={`${path}`} >
                                        <span className="alcm__Desk--icon">{items.icon}</span>
                                        <span>{items.nav}</span>
                                    </Link>
                                </li>
                            })} */}

                        </ul> : <Link className="logo" to="Home">
                            <span>CEDCOSS</span>

                        </Link>
                    }
                </>


                <div className="alcm__Account">
                    <div className="alcm__Account--wrapper">Login</div>
                </div>

            </div>
        </header >
    );

}
export default Header