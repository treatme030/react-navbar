import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    //links의 수에 따른 높이 변경
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`
            console.log(linksContainerRef.current.getBoundingClientRect().height)//index.css상의 0으로 표시됨
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    },[showLinks])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2>codding <span style={{color:'hsl(205, 78%, 60%)'}}>juhee</span></h2>
                    <button className="nav-toggle" 
                    onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars/>
                    </button>
                </div>
                    {/* <div className={showLinks ? "links-container show-container" : "links-container" } */}
                    <div className="links-container"
                    ref={linksContainerRef}>
                        <ul className="links" ref={linksRef}>
                            { links.map((link) => {
                                const {id, url, text} = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                <ul className="social-icons">
                    { social.map((item) => {
                        const { id, url, icon } = item
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;