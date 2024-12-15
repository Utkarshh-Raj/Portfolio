import React from 'react'
import '../styles/home.css'
import satellite from '../images/satellite.png'
const MainSection = () => {
    return (
        <>
            <div className="content" id="home">
                <div className="container">
                    <div className="base">
                        <div className="intro-cont">
                            <div className="position" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                                <div className="viewbox">

                                </div>
                                <div className="viewbox-2">

                                </div>
                                <div className="gradient"></div>
                            </div>
                            <div className="satellite">
                                <img src={satellite} className="satellite" alt="" />
                            </div>
                            <p id="name">Utkarsh Raj</p>
                            <p id="intro-para">
                            Hello! I’m Utkarsh Raj,
                            A passionate 4th-year student specializing in Electronics and Communication Engineering, currently pursuing my Bachelor's degree.</p>
                            {/* <img className="logo-img pballs" data-speed="0.71" src={logo} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection